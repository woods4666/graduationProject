import React from 'react';
import {connect} from 'react-redux'
import {NavLink,withRouter} from 'react-router-dom'
import {Icon} from 'antd';
class Nav extends React.Component{

    constructor(props,context){
        super(props,context);
        this.state={
            type:[]
        }
    }
    render(){
        return <nav className={'navBottomBox'}>
            <ul>
                <li><NavLink to={'/home'} type={'home'}><Icon type={'home'}/>首页</NavLink></li>
                <li><NavLink to={'/all'} type={'profile'}><Icon type={'profile'}/>全部产品</NavLink></li>
                <li><NavLink to={'/stroll'} type={'compass'}><Icon type={'compass'}/>闲逛</NavLink></li>
                <li><NavLink to={'/cart'} type={'shopping'}><Icon type={'shopping-cart'}/>购物车</NavLink></li>
                <li><NavLink to={'/usercenter'} type={'user'}><Icon type={'user'}/>账户中心</NavLink></li>
            </ul>
        </nav>
    }
}

export default withRouter(connect()(Nav))