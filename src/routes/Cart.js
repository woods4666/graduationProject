import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import '../static/css/cart.less'
import List from './cart/List'
import action from '../store/action/index'
import {checkLog} from "../api/person";

class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {isLogin: false};
    }

    async componentDidMount() {
        let {queryInfo} = this.props;
        queryInfo();

        let result = await checkLog();
        if (parseFloat(result.code) !== 1) {
            this.setState({isLogin: true});
        }
    }

    render() {
        let {cartList} = this.props;

        return <div className={'cartBox'}>

            {/*登录*/}
            {this.state.isLogin?'':<div className={'header-login'}>
                <NavLink to={'/usercenter/login'} className={'login-btn'}>登录</NavLink>
                <span className={'login-tip'}>你可以在登录后同步电脑与手机购物车中的商品</span>
            </div>}


            {/*购物车为空 或是 列表信息*/}
            {cartList.length === 0 ? (<div className={'emptyCart'}>
                <img src={require('../static/images/shop.png')} alt=""/>
                <p>您的购物车还是空荡荡的</p>
                <NavLink to={'/home'}>赶紧去逛逛</NavLink>
            </div>) : <List isLogin={this.state.isLogin}/>}
        </div>;
    }
}

export default connect(state => state.shopcart, action.shopcart)(Cart);
