import React from 'react';
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import {Icon} from 'antd'
class NavTop extends React.Component{

    constructor(props,context){
        super(props,context);
    }

    render(){
        let pathname=this.props.location.pathname.split('/')[1];
        return <section className={'navTop'}>
            {pathname==='home'?<div className={'homeTop'}>
                <h2></h2>
                <Link to={'/all'}><Icon type={'search'}/></Link>
            </div>:null}
            {pathname==='all'?<p className={'all'}>全部商品</p>:null}
            {pathname==='stroll'?<p className={'stroll'}>闲逛</p>:null}
            {pathname==='cart'?<p className={'cart'}>购物车</p>:null}
            {pathname==='usercenter'?<p className={'usercenter'}>账号中心</p>:null}
        </section>
    }
}
export default withRouter(connect()(NavTop))