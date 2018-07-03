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
/shopcart/add  goodsId 加入商品索引  categoryId 加入商品所属分类索引 

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