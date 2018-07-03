const express = require('express');
const goods = express.Router();
const util = require('../utils');
const randomAry = [2868,2870,2871,2875,2876,2877,2879,2881,2884,2885,2895,2898,2902,2905,2906,2907,3333,3433,3439,3458,3517,3528,3529,3530,3531,3532,3576,3587,3595]

goods.get('/allCategory',async (req,res) => {
    let list = JSON.parse(await util.readFile('./data/quanbufenlei.json'));
    res.send({
        code:0,
        msg:'ok',
        list
    })
})

goods.get('/banner',(req,res) => {
    let list = JSON.parse(await util.readFile('./data/banner.json'));
    res.send({
        code:0,
        msg:'ok',
        list
    })
})

goods.get('/info/:category/:id',(req,res) => {
    let {category,id} = req.params;
    let data = JSON.parse(await util.readFile(`./data/${category}.json`));
    let goodsData = data.find(item => {
        return item.ItemInfoId === id
    });
    if(!goodsData){
        res.send({
            code:1,
            msg:'no'
        })
    }else{
        res.send({
            code:0,
            msg:'ok',
            goodsData
        })
    }
})


/**
 * sort 0  默认
 * 1  按照时间
 * 2  按照销售量
 * 3  价格从高到低
 * 4  价格从低到高
 */
goods.get('/category/:id/:sort',(req,res) => {
    let {id,sort} = req.params;
    let data = JSON.parse(await util.readFile(`./data/${id}.json`))
    switch (parseFloat(id)) {
        case 1:
            data = data.sort((a,b) => {
                return parseFloat(a.ItemInfoId) - parseFloat(b.ItemInfoId)
            })
            break;
        case 2:
            data = data.sort((a,b) => {
                return a['CommentList'].length - b['CommentList'].length
            })
            break;
        case 3:
            data = data.sort((a,b) => {
                return parseFloat(a['SalePrice']) - parseFloat(b['SalePrice'])
            })
            break;
        case 4:
            data = data.sort((a,b) => {
                return parseFloat(b['SalePrice']) - parseFloat(a['SalePrice'])
            })
        default:
            break;
    }
    let list = [];
    data.forEach(item => {
        list.push({
            id:item.ItemInfoId,
            name:item.Name,
            pic:item.ImageUrl,
            activityPrice:item.ActivityPrice,
            activityTag:item.ActivityTag,
            isEmpty:item.IsEmpty,
            commentNum:item.CommentCount,
            categoryId:item.categoryId
        })
    });
    res.send({
        code:0,
        msg:'ok',
        list
    })
})

app.get('/random',(req,res) => {
    let flag = 0;
    let list = [];
    randomAry.forEach(item => {
        let curData = JSON.parse(await util.readFile(`./data/${item}.json`));
        let index = Math.floor(Math.random() * curData.length) ;
        if(list.length < 20){
            list.push(curData[index]);
        }
    });
    res.send({
        code:0,
        msg:'ok',
        list
    })
})

app.post('/search',(req,res) => {
    let {ref} = req.body;
    let list = [];
    for (let i = 0; i < randomAry.length; i++) {
        let curData = JSON.parse(await util.readFile(`./data/${randomAry[i]}.json`))
        curData.forEach(item => {
            if(item['Name'].indexOf(ref) >=0 ){
                list.push({
                    id:item.ItemInfoId,
                    name:item.Name,
                    pic:item.ImageUrl,
                    activityPrice:item.ActivityPrice,
                    activityTag:item.ActivityTag,
                    isEmpty:item.IsEmpty,
                    commentNum:item.CommentCount,
                    categoryId:item.categoryId
                })
            }
        })
    };
    res.send({
        code:0,
        msg:'ok',
        list
    })
})

module.exports = goods;
