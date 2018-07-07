import React from 'react';
import {connect} from 'react-redux'
import {NavLink,withRouter} from 'react-router-dom'
import {Icon,Badge} from 'antd';
import {query} from '../api/shopcart'
import action from "../store/action";
class Nav extends React.Component{

    constructor(props,context){
        super(props,context);
        /*this.state={
            num:0
        }*/
    }
    async componentDidMount(){
    /*    let result=await query(0);
        let {code,list}=result;
        this.props.add(list);*/
        /*if(parseFloat(code)===0){
            this.setState({
                num:list.length
            })
        }*/
    }

    render(){
        return <nav className={'navBottomBox'}>
            <ul>
                <li><NavLink to={'/home'} type={'home'}><Icon type={'home'}/>首页</NavLink></li>
                <li><NavLink to={'/all'} type={'profile'}><Icon type={'profile'}/>全部产品</NavLink></li>
                <li><NavLink to={'/stroll'} type={'compass'}><Icon type={'compass'}/>闲逛</NavLink></li>
                <li className={'badge'}><NavLink to={'/cart'} type={'shopping'}><Badge count={this.props.cartData.length}><Icon type={'shopping-cart'}/>购物车</Badge></NavLink></li>

                <li><NavLink to={'/usercenter'} type={'user'}><Icon type={'user'}/>账户中心</NavLink></li>

            </ul>
        </nav>
    }
}

export default withRouter(connect(state=>state.shopcart,action.shopcart)(Nav))