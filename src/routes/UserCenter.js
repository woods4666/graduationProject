import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Icon, Divider} from 'antd'
import {checkLog, queryInfo} from '../api/person'
import action from '../store/action'
import '../static/css/userCenter.less'
class UserCenter extends React.Component {
    constructor(props, context) {
        super(props, context);
        /*this.state={
         code:1
         }*/
    }

    async componentWillMount() {
        let result = await checkLog();
        if (result.code == 0) {
            let userResult = await queryInfo();
            let phone = userResult.info.phone;

            let {changeLoginState} = this.props,
                loginState = Number(!result.code);
            console.log(changeLoginState, this.props);
            changeLoginState(loginState, phone);
            /*this.setState({
             code:0
             })*/
        }
    }

    render() {
        let {loginState, phone} = this.props;
        return <section className="userCenterBox">
            <div className="imgBox">
                {loginState == 1 ? (
                    <div className="logined clearfix">
                        <Icon type="user"/>
                        <div className="info">
                            <p>{phone}</p>
                            <p>新会员</p>
                        </div>
                    </div>
                ) : (
                    <div className="unLogin">
                        <p>你还没登录</p>
                        <div className="log">
                            <Link to="/login" className="loginLink">登录</Link>
                            <Link to="/register" className="registerLink">注册</Link>
                        </div>
                    </div>
                )}


            </div>
            <div className="order">
                <div className="top order-item">
                    <Link to={loginState == 1 ? "/usercenter/userorder" : '/login'}>
                        <Icon type="pay-circle"/>
                        <span>待支付</span>
                    </Link>
                    <Divider type="vertical"/>
                    <Link to={loginState == 1 ? "/usercenter/userorder/packing" : '/login'}>
                        <Icon type="gift"/>
                        <span>待发货</span>
                    </Link>
                    <Divider type="vertical"/>
                    <Link to={loginState == 1 ? "/usercenter/userorder" : '/login'}>
                        <Icon type="car"/>
                        <span>待收货</span>
                    </Link>
                </div>
                <div className="middle order-item">
                    <Link to={loginState == 1 ? "/usercenter/userorder" : '/login'}>
                        <Icon type="message"/>
                        <span>评论</span>
                    </Link>
                    <Divider type="vertical"/>
                    <Link to={loginState == 1 ? "/usercenter/userorder" : '/login'}>
                        <Icon type="smile-o"/>
                        <span>回复</span>
                    </Link>
                    <Divider type="vertical"/>
                    <Link to={loginState == 1 ? "/usercenter/userorder" : '/login'}>
                        <Icon type="retweet"/>
                        <span>退换货</span>
                    </Link>
                </div>
                <Link to={loginState == 1 ? "/usercenter/userorder" : '/login'} className="clearfix">
                    <Icon type="file-text"/>
                    <span>我的订单</span>
                    <Icon type="right"/>
                </Link>
                <a href="#" className="clearfix">
                    <Icon type="red-envelope"/>
                    <span>我的优惠券</span>
                    <Icon type="right"/>
                </a>
                <a href="#" className="clearfix">
                    <Icon type="pay-circle-o"/>
                    <span>现金积分</span>
                    <Icon type="right"/>
                </a>
                <a href="#" className="clearfix">
                    <Icon type="profile"/>
                    <span>关于发票</span>
                    <Icon type="right"/>
                </a>
                <a href="#" className="clearfix">
                    <Icon type="setting"/>
                    <span>密码和登录信息</span>
                    <Icon type="right"/>
                </a>
                <a href="#" className="clearfix">
                    <Icon type="smile-o"/>
                    <span>老会员建议</span>
                    <Icon type="right"/>
                </a>
                <a href="#" className="clearfix">
                    <Icon type="phone"/>
                    <span>客户服务</span>
                    <Icon type="right"/>
                </a>
                <a href="#" className="clearfix">
                    <Icon type="environment-o"/>
                    <span>地址管理</span>
                    <Icon type="right"/>
                </a>
                <a href="#" className="clearfix">
                    <Icon type="mobile"/>
                    <span>手机验证</span>
                    <Icon type="right"/>
                </a>

            </div>
            <Link className="setting" to="/setting"></Link>
        </section>
    }
}

export default connect(state => state.usercenter, action.userCenter)(UserCenter)