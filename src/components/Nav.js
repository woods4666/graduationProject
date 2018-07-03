import React from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {Icon} from 'antd';
class Nav extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    render(){
        return <Nav>
            <ul>
                <li><NavLink to={'/'}><Icon type={'home'}/>首页</NavLink></li>
                <li><NavLink to={'/'}><Icon type={'profile'}/>全部产品</NavLink></li>
                <li><NavLink to={'/'}><Icon type={'compass'}/>闲逛</NavLink></li>
                <li><NavLink to={'/'}><Icon type={'shopping-cart'}/>购物车</NavLink></li>
                <li><NavLink to={'/'}><Icon type={'user'}/>账户中心</NavLink></li>
            </ul>
        </Nav>
    }
}

export default connect()(Nav)