import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Icon,Divider} from 'antd'
import '../static/css/userCenter.less'
class UserCenter extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className="userCenterBox">
        <div className="imgBox">
           <div className="unLogin">
               <p>你还没登录</p>
               <div className="log">
                   <a href="#" className="loginLink">登录</a>
                   <a href="#" className="registerLink">注册</a>
               </div>
           </div>
          {/* <div className="logined clearfix">
               <Icon type="user" />
               <div className="info">
                   <p>13838383838</p>
                   <p>新会员</p>
               </div>
           </div>*/}
        </div>
        <div className="order">
            <div className="top order-item">
                <Link to="/usercenter/userorder">
                    <Icon type="pay-circle" />
                    <span>待支付</span>
                </Link>
                <Divider type="vertical" />
                <Link to="/usercenter/userorder/packing">
                    <Icon type="gift" />
                    <span>待发货</span>
                </Link>
                <Divider type="vertical" />
                <a href="#">
                    <Icon type="car" />
                    <span>待收货</span>
                </a>
            </div>
            <div className="middle order-item">
                <a href="#">
                    <Icon type="message" />
                    <span>评论</span>
                </a>
                <Divider type="vertical" />
                <a href="#">
                    <Icon type="smile-o" />
                    <span>回复</span>
                </a>
                <Divider type="vertical" />
                <a href="#">
                    <Icon type="retweet" />
                    <span>退换货</span>
                </a>
            </div>
            <Link to="/usercenter/userorder" className="clearfix">
                <Icon type="file-text" />
                <span>我的订单</span>
                <Icon type="right" />
            </Link>
            <a href="#" className="clearfix">
                <Icon type="red-envelope" />
                <span>我的优惠券</span>
                <Icon type="right" />
            </a>
            <a href="#" className="clearfix">
                <Icon type="pay-circle-o" />
                <span>现金积分</span>
                <Icon type="right" />
            </a>
            <a href="#" className="clearfix">
                <Icon type="profile" />
                <span>关于发票</span>
                <Icon type="right" />
            </a>
            <a href="#" className="clearfix">
                <Icon type="setting" />
                <span>密码和登录信息</span>
                <Icon type="right" />
            </a>
            <a href="#" className="clearfix">
                <Icon type="smile-o" />
                <span>老会员建议</span>
                <Icon type="right" />
            </a>
            <a href="#" className="clearfix">
                <Icon type="phone" />
                <span>客户服务</span>
                <Icon type="right" />
            </a>
            <a href="#" className="clearfix">
                <Icon type="environment-o" />
                <span>地址管理</span>
                <Icon type="right" />
            </a>
            <a href="#" className="clearfix">
                <Icon type="mobile" />
                <span>手机验证</span>
                <Icon type="right" />
            </a>

        </div>
        </section>
    }
}

export default connect()(UserCenter)