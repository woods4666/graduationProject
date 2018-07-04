import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Icon,Button} from 'antd'
import '../static/css/cart.less'
class Cart extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'cartBox'}>
            <div className={'point'}>
                <Link to={'/login'}>登录</Link>
                <span>您可以再登录后同步电脑与手机购物车中的商品</span>
            </div>
            <div className={'iconCart'}>
                <img src="" alt=""/>
                <p>您的购物车还是空荡荡的</p>
                <Button type={'dashed'}>赶紧去逛逛</Button>
            </div>
        </section>
    }
}

export default connect()(Cart)