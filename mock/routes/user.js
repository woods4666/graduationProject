const express = require('express');
const user = express.Router();
const util = require('../utils')

user.use( async (req,res,next) => {
    req.userData = await util.readFile('./data/user.json');
    next()
})


user.post('/register',(req,res) => {
    console.log(1);
    
    console.log(req.body);
    
    let {phone,password} = req.body;
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
    userData.push({phone,password});
    util.writeFile('../data/user.json',JSON.stringify(userData)).then(result => {
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
    writeFile('../data/user.json',JSON.stringify(userData))
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


module.exports = user;