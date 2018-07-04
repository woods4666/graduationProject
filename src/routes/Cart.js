import React from 'react';
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
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
        </section>
    }
}

export default connect()(Cart)