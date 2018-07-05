/*
import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Button} from 'antd'
import '../static/css/cart.less'
import action from "../store/action";
import {query} from '../api/shopcart'
import Unpay from "./cart/Unpay";

class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            unpay: [],
        }
    }

    async componentDidMount() {
        let result = await query(0);
        if (parseFloat(result.code) === 0) {
            this.setState({
                unpay: result.list
            })
        }
    }

    render() {
        return <section className={'cartBox'}>
            <div className={'point'}>
                <Link to={'/login'}>登录</Link>
                <span>您可以再登录后同步电脑与手机购物车中的商品</span>
            </div>
            {this.state.unpay.length===0?<div className={'iconCart'}>
                    <img src={require('../static/images/shop.png')} alt=""/>
                    <p>您的购物车还是空荡荡的</p>
                    <Link to={'/home'}><Button type={'dashed'}>赶紧去逛逛</Button></Link>
                </div>:<Unpay/>}
                <Unpay/>
        </section>
    }
}
export default connect(state => state.shopcart, action.shopcart)(Cart)*/
import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import NavTop from '../component/NavTop'
import '../static/css/cart.less'
import {Checkbox,Modal} from 'antd'
import List from './cart/List'

const confirm = Modal.confirm;

class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={isEdit:false};
    }

    render() {
        let {isEdit}=this.state;
        return <div className={'cartBox'}>
            {/*头部导航*/}
            {/*<NavTop isEdit={this.state.isEdit}/>*/}

            {/*登录*/}
            <div className={'header-login'}>
                <NavLink to={'/usercenter/login'} className={'login-btn'}>登录</NavLink>
                <span className={'login-tip'}>你可以在登录后同步电脑与手机购物车中的商品</span>
            </div>

            {/*购物车为空*/}
            <div className={'emptyCart'}>
                <img src={require('../static/images/shop.png')} alt=""/>
                <p>您的购物车还是空荡荡的</p>
                <NavLink to={'/home'}>赶紧去逛逛</NavLink>
            </div>

            {/*列表信息*/}
            {/*<List/>*/}


        </div>
    }

    showConfirm() {
        confirm({
            title: '确定删除商品吗?',
            content: '',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
}

export default connect()(Cart);
