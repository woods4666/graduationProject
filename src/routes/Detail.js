import React from "react";
import { connect } from "react-redux";
import { Carousel, Tabs, Button } from "antd";
import { withRouter } from "react-router-dom";
import { getInfo } from "../api/goods";
import "../static/css/detail.less";
import Loading from "./Detail/Loading";
import Pic from "./Detail/Pic";
import ListItem from "./Detail/ListItem";
import DetailFooter from "./Detail/DetailFooter";
import { query } from "../api/shopcart";
import action from "../store/action";

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoading: true,
            defaultNum: 1
        }
        console.log(1);
        
    }

    async componentDidMount() {
        let { category, id } = this.props.match.params;
        console.log(category,id);
        
        this.data = await getInfo({ category, id });
        this.cartList = await query();
        this.bannerData = this.data.goodsData['Headers'];
        this._data = this.data.goodsData;
        let skus = this._data.GroupAttrs.skus
        this.matrix = [];
        for (const key in skus) {
            if (skus[key]['infoId'] == id) {
                this.matrix = skus[key]['vIdx']
            }
        }
        this.props.init(this.matrix);
        let index = 0;
        this.bannerData.forEach(item => {
            let temp = new Image();
            temp.src = 'http://i.lifevccdn.com' + item.ImageUrl;
            temp.onload = () => {
                index++;
                if (index >= this.bannerData.length - 1) {
                    this.setState({
                        isLoading: false
                    })
                }
            }
        });
    }

    render() {
        let { isLoading } = this.state;
        let { category, id } = this.props.match.params;
        if (isLoading) {
            return (
                <div className="container-detail">
                    <Loading></Loading>
                    <DetailFooter
                    category={category}
                    id={id}
                    num={0} />
                </div>
            )
        }
        return (
            <div className="container-detail">
                <DetailFooter
                    category={category}
                    id={id}
                    shopNum={this.state.defaultNum}
                    num={this.cartList.list.length} />
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="商品" key="1">
                        <Carousel autoplay>
                            {
                                this.bannerData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={'http://i.lifevccdn.com' + item.ImageUrl} alt={" "} />
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                        <section>
                            <div className="title">
                                <div className="title-l">
                                    <h1 className="detail-name">{this.data.goodsData.Name}</h1>
                                    <p className="detail-cap fontC">{this.data.goodsData.Caption}</p>

                                    {
                                        parseFloat(this._data.ActivityPrice) > 0 ?
                                            (
                                                <div>
                                                    <p className="detail-price">
                                                        <span className="sale-p priceC">￥{this._data.ActivityPrice}</span>
                                                        <span className="a-p">￥{this._data.SalePrice}</span>
                                                    </p>
                                                    <span className="a-span">{this._data.ActivityTag}</span>
                                                </div>
                                            ) :
                                            (
                                                <p className="detail-price">
                                                    <span className="sale-p priceC">￥{this._data.SalePrice}</span>
                                                </p>
                                            )
                                    }

                                </div>
                                <div className="title-r">
                                    <p className="com-num priceC">
                                        {
                                            parseFloat(this._data.CommentCount) > 1000 ? '999+' : this._data.CommentCount
                                        }
                                    </p>
                                    <span>用户评价</span>
                                </div>
                            </div>
                            <div className="param-box">
                                {
                                    this._data.GroupAttrs.props.map((item, index) => {
                                        return (
                                            <p key={index}>
                                                <span className="param-title" key={index}>{item.pname}:</span>
                                                {
                                                    item.vals.map((attr, _index) => {
                                                        return <span
                                                            className={
                                                                _index == this.props.matrix[index] ?
                                                                    "param-attr param-attr-active" :
                                                                    "param-attr"
                                                            }
                                                            onClick={() => {
                                                                this.props.modify({
                                                                    a: index,
                                                                    b: _index
                                                                })
                                                            }}
                                                            key={_index}>{attr.vname}</span>
                                                    })
                                                }
                                            </p>
                                        )
                                    })
                                }
                                <div className="shop-num">
                                    <span className="param-title">数量：</span>
                                    <Button
                                        size="small"
                                        disabled={this.state.defaultNum <= 1}
                                        onClick={() => {
                                            this.setState({
                                                defaultNum: this.state.defaultNum - 1
                                            })
                                        }}>-</Button>
                                    <Button disabled size="small">{this.state.defaultNum}</Button>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            this.setState({
                                                defaultNum: this.state.defaultNum + 1
                                            })
                                        }}
                                    >+</Button>
                                </div>
                            </div>

                            <div className="img-wrapper">
                                <img src="http://i.lifevccdn.com/upload/combinationchart/d366056438fd471c82cebc3426d6d4d9.jpg" alt="" />
                            </div>
                            <div className="img-wrapper">
                                <img src="http://i.lifevccdn.com/upload/combinationchart/bbfd6535985949fe8bbd9b9eaad5909e.jpg" alt="" />
                            </div>
                        </section>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="详情" key="2">
                        {
                            this.data.goodsData.Details.map((item, index) => {
                                return (
                                    <Pic pic={item.ImageUrl} key={index} />
                                )
                            })
                        }
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={`评论(${this.data.goodsData.CommentCount})`} key="3">
                        <ul className="comment-box">
                            {this.data.goodsData.CommentList.map((item, index) => {
                                return <ListItem {...item} key={index} />
                            })}
                        </ul>
                    </Tabs.TabPane>
                </Tabs>

            </div>
        )
    }
}

export default withRouter(connect(state => state.detail, action.detail)(Detail));

