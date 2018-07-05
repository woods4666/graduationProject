import React from "react";
import { NavLink } from "react-router-dom";
import {Icon, Badge} from 'antd'
import { add } from "../../api/shopcart";

class DetailFooter extends React.Component{
    constructor(props){
        super(props)
    }

    addTo = () => {
        let {category,id,shopNum} = this.props;
        add({
            categoryId:category,
            goodsId:id,
            num:shopNum
        }) 
    }

    render(){
        return(
            <div className="detail-footer footerNavBox" style={{zIndex:'10000'}}>
                <NavLink to={'/home'}>
                    <Icon type={'home'}/>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/cart">
                    <Badge count={this.props.num} offset={[0,20]}>
                        <Icon type="shopping-cart" />
                        <span>购物车</span>
                    </Badge>
                </NavLink>
                <div className="shop-df" onClick={this.addTo}>加入购物车</div>
            </div>
        )
    }
}
export default DetailFooter