import React from 'react';
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import {Icon} from 'antd'
import action from "../store/action";
class NavTop extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={isEdit:false};
    }
    render(){
        let {edit,cartList}=this.props;
        console.log(cartList);
        let pathname=this.props.location.pathname.split('/')[1];
        return <section className={'navTop'}>
            {pathname==='home'||pathname==='detail'?<div className={'homeTop'}>
                <h2></h2>
                <Link to={'/all'}><Icon type={'search'}/></Link>
            </div>:null}
            {pathname==='all'?<p className={'all'}>
                <Icon type="left" className={'back'} onClick={ev=>{
                    this.props.history.go(-1);
                }}/>
                全部商品</p>:null}
            {pathname==='stroll'?<p className={'stroll'}>
                <Icon type="left" className={'back'} onClick={ev=>{
                    this.props.history.go(-1);
                }}/>
                闲逛</p>:null}
            {pathname==='cart'?<div className={'cart clearfix'}>
                <p>购物车</p>
                <Icon type="left" className={'back'} onClick={ev=>{
                    this.props.history.go(-1);
                }}/>
                <div onClick={ev=>{
                    edit(!this.state.isEdit);
                    this.setState({isEdit:!this.state.isEdit});
                }} style={{display:`${cartList.length===0?'none':'block'}`}}>
                    <Icon type="setting"/>
                    <span>{this.state.isEdit?'完成':'修改'}</span>
                </div>
            </div>:null}
            {pathname==='usercenter'?<p className={'usercenter'}>
                <Icon type="left" className={'back'} onClick={ev=>{
                    this.props.history.go(-1);
                }}/>
                账户中心<Link to={'/usercenter/setting'}>设置</Link></p>:null}
            {pathname==='usercenter/userorder'?<p className={'userorder'}><Icon type='left'/>我的订单</p>:null}

        </section>
    }
}
export default withRouter(connect(state=>state.shopcart,action.shopcart)(NavTop))