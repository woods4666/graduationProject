import React from "react";

class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { CustomerCity, CreatedAt, CustomerName, CustomerLevelName, Content, BuyCount, Target } = this.props
        return (
            <li>
                <div>
                    <span>{CustomerCity}</span>
                    <span>{CustomerName}</span>
                    <span className="titleC">{CustomerLevelName}</span>
                    <span className="fontC">累计购物{BuyCount}</span>
                </div>
                <p>{Content}</p>
                <div>
                    <span>{CreatedAt}</span><span className="fontC">{Target}</span>
                </div>
            </li>
        )
    }
}
export default ListItem

/**
 * AppendCommentImages
:
[]
AppendContent
:
null
AppendDate
:
"0001-01-01"
BuyCount
:
456
CommentImages
:
[]
Content
:
"很有质感的盘子，在家吃个牛排西餐放个甜品都很漂亮，最喜欢盘边的花边。"
CreatedAt
:
"2018-07-02"
CustomerCity
:
"新疆"
CustomerLevelName
:
"VIP会员"
CustomerName
:
"180*****070"
Target
:
"  商品:饭碗2只装+浅盘2只装（立省3元）      款式:浪花蓝    "
 */