
import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import '../static/css/cart.less'
import {Modal} from 'antd'
import List from './cart/List'
import {checkLog} from '../api/person'
import {query} from '../api/shopcart'

const confirm = Modal.confirm;

class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            isEdit:false,
            data:[]
        };
    }
   async componentDidMount(){
        let state=await checkLog();
        if(parseFloat(state.code)===0){
            this.setState({
                isExit:true
            })
        }
        let result=await query(0),
            {code,list}=result;
        if(parseFloat(code)===0){
            this.setState({
                data:list
            })
        }
    }
    render() {
        return <div className={'cartBox'}>
            {/*头部导航*/}
            {/*<NavTop isEdit={this.state.isEdit}/>*/}
            {/*登录*/}
            {!this.state.isEdit?<div className={'header-login'}>
                <NavLink to={'/usercenter/login'} className={'login-btn'}>登录</NavLink>
                <span className={'login-tip'}>你可以在登录后同步电脑与手机购物车中的商品</span>
            </div>:null}
            {this.state.data.length===0?<div className={'emptyCart'}>
                <img src={require('../static/images/shop.png')} alt=""/>
                <p>您的购物车还是空荡荡的</p>
                <NavLink to={'/home'}>赶紧去逛逛</NavLink>
            </div>:<List/>}

            {/*购物车为空*/}
            {/*列表信息*/}

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
