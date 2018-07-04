const express = require('express');
const shopcart = express.Router();
const util = require('../utils');

shopcart.use(async (req,res,next) => {
    req.shopcartData = JSON.parse(await util.readFile('./data/shopcart.json'));
    next()
})

shopcart.post('/add',async (req,res) => {
    let {goodsId,categoryId} = req.body;
    let curCategory = JSON.parse(await util.readFile(`./data/${categoryId}.json`));
    let curGood = curCategory.find(item => item.id == goodsId);
    if(req.session.userID){
        let {shopcartData} = req;
        let index = shopcartData.findIndex(item => {
            return item.userId == req.session.userId
        });
        // 如果当前用户没有商品
        let curUserData = shopcartData[index];
        if(curUserData.list.length <= 0 || !curUserData.list){
            curUserData.list = [];
        }
        let key = curUserData.list.findIndex(item => {
            return item.id == goodsId
        }) 
        if(key >= 0){
            curUserData.list[index].num++
        }else{
            curUserData.list.push({
                id:goodsId,
                categoryId,
                num:1,
                status:0,
                name:curGood.Name,
                pic:curGood.ImageUrl,
                salePrice:curGood.SalePrice,
                activityPrice:curGood.activityPrice,
                activityTag:curGood.activityTag
            })
        }
        util.writeFile('./data/shopcart.json',JSON.stringify(shopcartData))
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
    }else{
        if(!req.session.storeList){
            req.session.storeList = [{
                id:goodsId,
                categoryId,
                num:1,
                status:0,
                name:curGood.Name,
                pic:curGood.ImageUrl,
                salePrice:curGood.SalePrice,
                activityPrice:curGood.activityPrice,
                activityTag:curGood.activityTag
            }];
        }else{
            let {storeList} = req.session;
            let _index = storeList.findIndex(item => {
                return item.id == goodsId
            });
            if(_index >= 0){
                storeList[_index].num++;
                req.session.storeList = storeList
            }else{
                req.session.storeList.push({
                    id:goodsId,
                    categoryId,
                    num:1,
                    status:0,
                    name:curGood.Name,
                    pic:curGood.ImageUrl,
                    salePrice:curGood.SalePrice,
                    activityPrice:curGood.activityPrice,
                    activityTag:curGood.activityTag
                })
            }
        }
    }

})

shopcart.post('/remove',(req,res) => {
    let {idList} = req.body;
    if(req.session.userID){
        let {shopcartData} = req;
        let key = shopcartData.find(item => {
            return item.userId == req.session.userId 
        });
        shopcartData[key].list = shopcartData[key].list.filter(item => {
            return idList.indexOf(item) < 0
        })
        util.writeFile('./data/shopcart.json',JSON.stringify(shopcart))
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
    }else{
        req.session.storeList = req.session.storeList.filter(item => {
            return idList.indexOf(item) < 0
        });
        res.send({
            code:0,
            msg:'ok'
        })
    }
})

shopcart.post('/pay',(req,res) => {
    let {idList} = req.body;
    if(!req.session.userID){
        res.send({
            code:1,
            msg:'no'
        });
        return
    };
    let {shopcartData} = req;
    idList.forEach(id => {
        let curUserData = shopcartData.findIndex(item => item.userId == req.session.userId);
        let _index = curUserData.list.findIndex(item => item.id == id);
        if(_index < 0){
            res.send({
                code:1,
                msg:'no'
            })
        }else{
            curUserData.list[_index].status = 1;
        }
    });
    util.writeFile('./data/shopcart.json',JSON.stringify(shopcartData))
        .then(result => {
            res.send({
                code: 0,
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

shopcart.get('/query',(req,res) => {
    if(!req.session.userId){
        res.send({
            code:0,
            msg:'ok',
            list:req.session.storeList
        })
    }else{
        let {shopcartData} = req;
        let userIndex = shopcartData.findIndex(item => item.userId == req.session.userId);
        res.send({
            code:0,
            msg:'ok',
            list:shopcartData[userIndex].list
        })
    }
})



module.exports = shopcart;