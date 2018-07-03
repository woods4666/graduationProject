import React from 'react';
import {connect} from 'react-redux'
import {NavLink,withRouter} from 'react-router-dom'
import {Icon} from 'antd';
class Nav extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <nav className={'navBottomBox'}>
            <ul>
                <li><NavLink to={'/home'}><Icon type={'home'}/>首页</NavLink></li>
                <li><NavLink to={'/all'}><Icon type={'profile'}/>全部产品</NavLink></li>
                <li><NavLink to={'/stroll'}><Icon type={'compass'}/>闲逛</NavLink></li>
                <li><NavLink to={'/cart'}><Icon type={'shopping-cart'}/>购物车</NavLink></li>
                <li><NavLink to={'/usercenter'}><Icon type={'user'}/>账户中心</NavLink></li>
            </ul>
        </nav>
    }
}

export default withRouter(connect()(Nav))