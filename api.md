
所有图片地址前面加上  'http://i.lifevccdn.com'

### user

1. 注册   POST   phone password
/user/register
返回 ：{
    code:0,  
    msg:'ok'
}

2. 登录   POST  phone password
/user/login 
返回 {
    code:0,
    msg:'ok;
}

3. 登出  GET  
/user/checkout  
返回  {
    code:0,
    msg:'ok'
}

4. 修改密码  POST  phone oldp(旧密码)  newp(新密码)
/user/modify
返回 {
    code:0,    //0 成功 1未知失败 2手机号或者旧密码不对
    msg:'ok'
}

5. 检查登录  GET   
/user/check

6. 获取个人信息  GET
/user/info
返回{
    code:0,
    msg:'ok',
    info:{
        phone,
        password,
        email,
        name
    }
}

=============

### 商品数据 

6. 全部分类页  GET   
/goods/allCategory 
返回：{
    code:0,
    msg:'ok',
    list:[
        {
            name:'下厨',
            chilren:[
                {
                    "Icon": "/upload/AppIndexIcon/709153cd89b94b05af99e0ee55858a21.jpg",  //分类图标
                    "ItemIndexId": 2877,   //分类索引
                    "Name": "家务工具",     //分类名称
                }
                ...
            ]
        }
        ...
    ]
}

7. 首页轮播  GET
/goods/banner
{
    code:0,
    msg:'ok',
    list:[
        {
            "ImageUrl": "/upload/IndexBanner/14ebf42a82a74d029f4c31c8fc6ec003.jpg",  //图片地址
            "categoryId":3528,   // 分类索引
            "ItemInfoId": 28849  // 物品索引
        }
        ....
    ]
}

3544

8. 商品详情  GET
/goods/info/[分类索引]/[物品索引]
{
    code:0,
    msg:'ok',
    goodsData:{
        ItemInfoId:  // 物品索引
        Name // 名称
        ImageUrl  // 图片地址
        SalePrice  // 正常价格
        CommentCount:  // 评价总数
        Caption   // 描述
        IsEmpty  // 是否售空
        ActivityTag  // 活动名称
        ActivityPrice  // 活动价格
        SpecificationInfo  // 规格参数
        CommentList:[
            {
                Content  // 评论内容
                CreatedAt  // 评论时间
                CustomerName  //评论用户
                CustomerLevelName  //会员等级
                BuyCount   // 累计购物
            }
        ],
        Headers:[  // 详情页顶部轮播图
            {
                ImageUrl  //图片地址
            }
        ]
    }
}

9. 点进某一类获取数据、排序等  GET
/goods/category/[分类索引]/[排序方式] 
排序方式： 0 默认  1按时间  2按销售量  3价格从高到底  4从低到高
{
    code:0,
    msg:'ok',
    list:[
        {
            id: //商品索引
            name  //商品名称
            pic  //图片
            activityPrice  //活动价格
            activityTag   // 活动名称
            isEmpty    // 是否售空
            commentNum  // 评论数
            categoryId   // 所属分类索引
        }
    ]
}

10. 闲逛  GET
/goods/random

11. 搜索  POST
/goods/search   ref 搜索关键字


###  购物车

12. 加入购物车  POST
/shopcart/add  goodsId 加入商品索引  categoryId 加入商品所属分类索引  num 加入购物车数量

13. 移除   POST
/shopcart/remove  idList 数组 要移除的商品索引

14. 支付  POST
/shopcart/pay 

15. 获取购物车列表  GET
/shopcart/query
{
    {
        id // 商品suoyin
        category  // 所属分类索引
        num  //选购数量
        status  //0未支付 1已支付
    }
}

数据格式
{
        "ItemInfoId": 17408,
        "Name": "德国进口不锈钢刀",
        "ImageUrl": "/upload/AppItemInfoImage/d4457734656e4bdfaa528a5466482d99.jpg",
        "Code": "824716260",
        "SalePrice": "69",
        "PriceTag": null,
        "PriceTags": null,
        "CommentCount": 6677,
        "SortIndex": {
            "ByDefault": 1,
            "ByPrice": 3,
            "ByOnline": 2,
            "BySale": 3
        },
        "ActivityPrice": "0",
        "ActivityTag": null,
        "IsEmpty": false,
        "Appeal": "德国进口钢材，持久锋利",
        "IsPotter": false,
        "CountdownTag": null,
        "CountdownTime": 0,
        "Uri": "inner:///item/17408",
        "MaskImageUrl": null,
        "Caption": "德国进口钢材，持久锋利",
        "SpecificationInfo": "规格与参数：德国进口1.4116钢-X50CrMoV15、米卡塔、约335g 、约270g、约435g 、约190g 、约205g",
        "ServiceCommitment": "服务承诺：0瑕疵4级质检，客服满意率99.5%",
        "Nervous": false,
        "OnSale": true,
        "ActivityEndDate": null,
        "GroupId": 4719,
        "MarketPrice": "159",
        "CommentList": [
            {
                "Content": "很不错，支持丽芙产品",
                "CreatedAt": "2018-07-02",
                "CustomerName": "134*****126",
                "CustomerCity": "北京",
                "BuyCount": 187,
                "CustomerLevelName": "VIP会员",
                "Target": "  规格:轻便菜刀    ",
                "AppendContent": null,
                "CommentImages": [],
                "AppendCommentImages": [],
                "AppendDate": "0001-01-01"
            },
            ...
        ],
        "CommentTop5": [
            {
                "Content": "很不错，支持丽芙产品",
                "CreatedAt": "2018-07-02",
                "CustomerName": "134*****126",
                "CustomerCity": "北京",
                "BuyCount": 187,
                "CustomerLevelName": "VIP会员",
                "Target": "  规格:轻便菜刀    ",
                "AppendContent": null,
                "CommentImages": [],
                "AppendCommentImages": [],
                "AppendDate": "0001-01-01"
            },
            ...
        ],
        "ClickCount": 150155,
        "SpecMsgList": null,
        "TotalSalesCount": 0,
        "ItemIndexId": 2798,
        "SaleType": 1,
        "IsPresaleItem": false,
        "IsPreSale": false,
        "SaleStatus": 2,
        "DeliveryRestrict": true,
        "Headers": [
            {
                "ImageUrl": "/upload/AppItemHeaders/eb97afefa92f41d2801f678bf3e061de.jpg",
                "Text": null
            },
            ...
        ],
        "Certificate": {
            "ImageUrl": null,
            "Text": null
        },
        "Details": [
            {
                "ImageUrl": "/upload/AppItemDetails/944549b1b2b24f949d4d459efd39b077.jpg",
                "Text": ""
            },
            ...
        ],
        "Composition": {
            "ImageUrl": "",
            "Text": ""
        },
        "Compositions": [],
        "Compare": {
            "ImageUrl": null,
            "Text": "",
            "OurText": "",
            "TheirText": ""
        },
        "Advantages": [],
        "UseCompare": null,
        "StandReason": null,
        "UseScence": null,
        "UseStep": null,
        "Probation": null,
        "ShareInfo": {
            "Title": "德国进口不锈钢刀-LifeVC丽芙家居",
            "Content": "德国进口钢材，持久锋利",
            "ImageUrl": "/upload/goods/1511191608152726.jpg",
            "Url": "http://w1.lifevc.com/goitem/17408"
        },
        "SpecificationImages": null,
        "GroupAttrs": {
            "props": [
                {
                    "imgPrev": 1,
                    "descF5": true,
                    "pid": 15,
                    "pname": "规格",
                    "vals": [
                        {
                            "vid": 8808,
                            "vname": "轻便菜刀"
                        },
                        {
                            "vid": 8812,
                            "vname": "厨师刀"
                        },
                        {
                            "vid": 8810,
                            "vname": "多用刀"
                        },
                        {
                            "vid": 8809,
                            "vname": "菜刀"
                        },
                        {
                            "vid": 9944,
                            "vname": "砍骨刀"
                        }
                    ]
                }
            ],
            "skus": {
                ";15:8809;": {
                    "sale": 1,
                    "vIdx": [
                        3
                    ],
                    "infoId": 17406,
                    "infoName": "德国进口不锈钢刀",
                    "infoImg": "/upload/AppItemExhibit/4d3e02ea82d044d68c373e209b6c216e.jpg",
                    "colorImg": "/upload/AppItemExhibit/4d3e02ea82d044d68c373e209b6c216e.jpg"
                },
                ";15:9944;": {
                    "sale": 1,
                    "vIdx": [
                        4
                    ],
                    "infoId": 17407,
                    "infoName": "德国进口不锈钢刀",
                    "infoImg": "/upload/AppItemExhibit/cfa6615a234d4767b7abbe846824e5be.jpg",
                    "colorImg": "/upload/AppItemExhibit/cfa6615a234d4767b7abbe846824e5be.jpg"
                },
                ";15:8812;": {
                    "sale": 1,
                    "vIdx": [
                        1
                    ],
                    "infoId": 17408,
                    "infoName": "德国进口不锈钢刀",
                    "infoImg": "/upload/AppItemExhibit/e5202699a4a142108a02533414c21e4f.jpg",
                    "colorImg": "/upload/AppItemExhibit/e5202699a4a142108a02533414c21e4f.jpg"
                },
                ";15:8810;": {
                    "sale": 3,
                    "vIdx": [
                        2
                    ],
                    "infoId": 17409,
                    "infoName": "德国进口不锈钢刀",
                    "infoImg": "/upload/AppItemExhibit/3d72a407473c4ddba791de16f4dc4cf5.jpg",
                    "colorImg": "/upload/AppItemExhibit/3d72a407473c4ddba791de16f4dc4cf5.jpg"
                },
                ";15:8808;": {
                    "sale": 3,
                    "vIdx": [
                        0
                    ],
                    "infoId": 17410,
                    "infoName": "德国进口不锈钢刀",
                    "infoImg": "/upload/AppItemExhibit/9bdbc55b4de940b38116b1b6ce05cf5e.jpg",
                    "colorImg": "/upload/AppItemExhibit/9bdbc55b4de940b38116b1b6ce05cf5e.jpg"
                }
            },
            "pvMap": {},
            "selSku": ";15:8812;"
        },
        "Specifications": [
            {
                "Name": "品名",
                "Value": "德国进口不锈钢刀"
            },
            {
                "Name": "刀片材质",
                "Value": "德国进口1.4116钢-X50CrMoV15"
            },
            {
                "Name": "刀柄材质",
                "Value": "米卡塔"
            },
            {
                "Name": "菜刀重量",
                "Value": "约335g "
            },
            {
                "Name": "轻便菜刀重量",
                "Value": "约270g"
            },
            {
                "Name": "砍骨刀重量",
                "Value": "约435g "
            },
            {
                "Name": "多用刀重量",
                "Value": "约190g "
            },
            {
                "Name": "厨师刀重量",
                "Value": "约205g"
            }
        ],
        "Notice": [],
        "Activities": [],
        "PersonalTailor": true,
        "ActivityEndPriceTag": null,
        "BuyWith": [
            {
                "ItemInfoId": 5877,
                "Name": "锋锐不锈钢刀(经典型)",
                "ImageUrl": "/upload/AppItemHeaders/46789646e6ec4f1093e9244180789d0d.jpg",
                "Code": "180291871",
                "SalePrice": 49,
                "PriceTag": "",
                "PriceTags": [],
                "CommentCount": 8899,
                "SortIndex": null,
                "ActivityPrice": 0,
                "ActivityTag": null,
                "IsEmpty": false,
                "Appeal": "利索地处理骨头",
                "IsPotter": false,
                "CountdownTag": null,
                "CountdownTime": 0,
                "Uri": "inner:///item/5877",
                "MaskImageUrl": null
            },
            {
                "ItemInfoId": 18683,
                "Name": "精工彩木柄不锈钢刀具4件套",
                "ImageUrl": "/upload/AppItemHeaders/5c4a11241bef4b2294c285a20300f696.jpg",
                "Code": "846967540",
                "SalePrice": 199,
                "PriceTag": "",
                "PriceTags": [],
                "CommentCount": 4175,
                "SortIndex": null,
                "ActivityPrice": 0,
                "ActivityTag": null,
                "IsEmpty": false,
                "Appeal": "精工不锈钢刀具，够锋利",
                "IsPotter": true,
                "CountdownTag": null,
                "CountdownTime": 0,
                "Uri": "inner:///item/18683",
                "MaskImageUrl": null
            },
            {
                "ItemInfoId": 15174,
                "Name": "可折叠陶瓷果蔬刀",
                "ImageUrl": "/upload/AppItemHeaders/2c71c478f3bd4970912a62df477e9e48.jpg",
                "Code": "2481713227",
                "SalePrice": 29,
                "PriceTag": "",
                "PriceTags": [],
                "CommentCount": 21247,
                "SortIndex": null,
                "ActivityPrice": 0,
                "ActivityTag": null,
                "IsEmpty": false,
                "Appeal": "陶瓷刀：始终锋利，永不生锈",
                "IsPotter": false,
                "CountdownTag": null,
                "CountdownTime": 0,
                "Uri": "inner:///item/15174",
                "MaskImageUrl": null
            }
        ],
        "SaleTags": null,
        "Activity": null,
        "Services": [],
        "Prompts": [],
        "ServiceIcon": [
            {
                "Title": "",
                "SubTitle": "",
                "ClassName": null,
                "ImageUrl": "/upload/combinationchart/d366056438fd471c82cebc3426d6d4d9.jpg",
                "ImageWidth": 750,
                "ImageHeight": 240,
                "CountdownTag": "",
                "CountdownTime": 0,
                "TouchElem": [
                    {
                        "BeginXP": 0,
                        "BeginYP": 0,
                        "EndXP": 49,
                        "EndYP": 90,
                        "Uri": "http://m.lifevc.com/activity/ChangingGiftNew/851ddce8d1cf411b9e87ac0f0129e340#s={session}"
                    },
                    {
                        "BeginXP": 50,
                        "BeginYP": 1,
                        "EndXP": 100,
                        "EndYP": 91,
                        "Uri": "http://m.lifevc.com/activity/oneyearwash?s=m#s={session}"
                    }
                ]
            },
            {
                "Title": "",
                "SubTitle": "",
                "ClassName": null,
                "ImageUrl": "/upload/combinationchart/bbfd6535985949fe8bbd9b9eaad5909e.jpg",
                "ImageWidth": 750,
                "ImageHeight": 380,
                "CountdownTag": "",
                "CountdownTime": 0,
                "TouchElem": [
                    {
                        "BeginXP": 0,
                        "BeginYP": 0,
                        "EndXP": 100,
                        "EndYP": 100,
                        "Uri": "javascript:void(0);"
                    }
                ]
            }
        ],
        "PriceTitle": null,
        "DisplaySort": [
            "Prompts",
            "Services"
        ],
        "categoryId": 2875
    }