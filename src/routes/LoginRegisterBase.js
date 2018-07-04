import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import Login from './LoginRegister/Login'
import Register from './LoginRegister/Register'
import '../static/css/loginRegister.less'
class LoginRegisterBase extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(this.props.location);
        let {pathname}=this.props.location;
        return <div className="loginRegisterBox">

            <div className="loginHeader">
                <Icon type="left-circle-o" />
                <img src={require('../static/images/loginLogo.png')} alt=""/>
            </div>
            <div className="loginBody">
                {pathname==='/login'?<Login/>:<Register/>}
            </div>
        </div>
    }
}

export default connect()(LoginRegisterBase)