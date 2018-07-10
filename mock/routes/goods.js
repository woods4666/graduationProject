const express = require('express');
const fs = require('fs');
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

goods.get('/banner',async (req,res) => {
    let list = JSON.parse(await util.readFile('./data/banner.json'));
    res.send({
        code:0,
        msg:'ok',
        list
    })
})

goods.get('/info/:category/:id',async (req,res) => {
    let {category,id} = req.params;
    let data = JSON.parse(await util.readFile(`./data/${category}.json`));
    if(!data){
        res.send({
            code:1,
            msg:'no'
        })
        return 
    }
    let goodsData = data.find(item => {
        return item.ItemInfoId == id
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
goods.get('/category/:id/:sort',async (req,res) => {
    let {id,sort} = req.params;
    let data = JSON.parse(await util.readFile(`./data/${id}.json`))
    switch (parseFloat(sort)) {
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
            Name:item.Name,
            ImageUrl:item.ImageUrl,
            ActivityPrice:item.ActivityPrice,
            ActivityTag:item.ActivityTag,
            IsEmpty:item.IsEmpty,
            CommentCount:item.CommentCount,
            categoryId:item.categoryId,
            SalePrice:item.SalePrice
        })
    });
    res.send({
        code:0,
        msg:'ok',
        list
    })
})

goods.get('/random',async (req,res) => {
    let list = [];
    let flag = false;
    randomAry.forEach(item => {
        // let curData = JSON.parse(await util.readFile(`./data/${item}.json`));
        // let index = Math.floor(Math.random() * curData.length) ;
        // if(list.length < 20){
        //     list.push(curData[index]);
        // }
        util.readFile(`./data/${item}.json`).then(result => {
            let curData = JSON.parse(result);
            let index = Math.floor(Math.random() * curData.length);
            if(list.length < 20){
                list.push(curData[index]);
            }else{
                if(flag) return ;
                flag = true;
                res.send({
                    code:0,
                    msg:'ok',
                    list
                })
            }
        })
    });
})

goods.post('/search',async (req,res) => {
    let {ref} = req.body;
    console.log(ref);
    
    let list = [];
    for (let i = 0; i < randomAry.length; i++) {
        let curData = JSON.parse(fs.readFileSync(`./data/${randomAry[i]}.json`))
        curData.forEach(item => {
            console.log(item.Name);
            
            if(item['Name'].indexOf(ref) >=0 ){
                list.push({
                    id:item.ItemInfoId,
                    Name:item.Name,
                    ImageUrl:item.ImageUrl,
                    ActivityPrice:item.ActivityPrice,
                    ActivityTag:item.ActivityTag,
                    IsEmpty:item.IsEmpty,
                    SalePrice:item.SalePrice,
                    CommentCount:item.CommentCount,
                    categoryId:item.categoryId
                })
            }
        })
    };
    console.log(list);
    
    res.send({
        code:0,
        msg:'ok',
        list
    })
})

goods.get('/hot',(req,res) => {
    res.send({
        code:0,
        msg:'ok',
        list:[
            {
                name:'凉席',
                categoryId:2895
            },
            {
                name:'毛浴巾',
                categoryId:3528
            },
            {
                name:'锅具',
                categoryId:3433
            },
            {
                name:'凉席',
                categoryId:2895
            },
            {
                name:'餐厨美食',
                categoryId:3576
            },
            {
                name:'餐具',
                categoryId:2876
            },
            {
                name:'晴雨伞',
                categoryId:3549
            },
            {
                name:'地毯地垫',
                categoryId:3458
            },
            {
                name:'床垫',
                categoryId:2906
            }
        ]
    })
})

module.exports = goods;
