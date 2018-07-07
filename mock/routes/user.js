const express = require('express');
const user = express.Router();
const util = require('../utils')

user.use( async (req,res,next) => {
    req.userData = JSON.parse(await util.readFile('./data/user.json'));
    req.shopcartData = JSON.parse(await util.readFile('./data/shopcart.json'))
    next()
})


user.post('/register',(req,res) => {
    let {phone,password,name,email} = req.body;
    let {userData} = req;
    let flag = userData.find(item => item.phone == phone);
    if(flag){
        res.send({
            code:1,
            msg:'no',
            phone,
            password
        })
        return
    }
    req.userData.push({phone,password,name,email});
    util.writeFile('./data/user.json',JSON.stringify(userData)).then(result => {
        res.send({
            code:0,
            msg:'ok'
        })
    })
})

user.post('/login',(req,res) => {
    let {phone,password} = req.body;
    let {userData} = req;
    let flag = userData.find(item => {
        return item.phone == phone && item.password == password
    });
    if(flag){
        req.session.userID = phone;
        if(!req.session.storeList){
            res.send({
                code:0,
                msg:'ok'
            })
        }else{
            let index = req.shopcartData.findIndex(item => item.userID == req.session.userID);
            if(index < 0){
                req.shopcartData.push({
                    userID:req.session.userID,
                    list:[]
                })
            }else {
                // 将两个数组合并
                let newList = req.session.storeList,
                    oldList = req.shopcartData[index].list;
                newList.forEach((item,index) => {
                    let idx = oldList.findIndex(_item => _item.id == item.id);
                    if(idx >= 0){
                        oldList[index].num = newList[idx].num;
                    }else{
                        oldList.push(item)
                    }
                })
                req.shopcartData[index].list =  oldList;
            }
            util.writeFile('./data/shopcart.json',JSON.stringify(req.shopcartData))
                .then(result => {
                    res.send({
                        code:0,
                        msg:'ok'
                    })
                })
        }
    }else{
        res.send({
            code:1,
            msg:'no'
        })
    }
})

user.get('/check',(req,res) => {
    let {userID} = req.session;
    if(!userID){
        res.send({
            code:1,
            msg:'no'
        })
    }else{
        res.send({
            code:0,
            msg:'ok'
        })
    }
})


user.get('/checkout',(req,res) => {
    let {userID} = req.session;
    if(userID){
        req.session.userID = undefined;
        res.send({
            code:0,
            msg:'ok'
        })
    }else{
        res.send({
            code:1,
            msg:'no'
        })
    }
})

user.post('/modify',(req,res) => {
    let {oldp,newp,phone} = req.body;
    let {userData} = req;
    let index = userData.findIndex(item => {
        return item.password == oldp && item.phone == phone
    });
    if(index<0){
        res.send({
            code:2,
            msg:'ok'
        })
        return
    }
    userData[index].password = newp;
    req.session.userID = undefined;
    util.writeFile('./data/user.json',JSON.stringify(userData))
        .then(result => {
            res.send({
                code:0,
                msg:'ok'
            })
        })
        .catch(err => {
            res.send({
                code:1,
                msg:'no'
            })
        })
})

user.get('/info',(req,res) => {
    let {userData} = req;
    if(req.session.userID){
        let curUserData = userData.find(item => item.phone == req.session.userID);
        res.send({
            code:0,
            msg:'ok',
            info:curUserData
        })
    }else{
        res.send({
            code:1,
            msg:'no'
        })
    }
})

module.exports = user;