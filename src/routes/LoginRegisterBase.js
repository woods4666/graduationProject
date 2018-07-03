import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import '../static/css/loginRegister.less'
class LoginRegisterBase extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className="loginRegisterBox">
            <div className="loginHeader">
                <Icon type="left-circle-o" />
                <img src={require('../static/images/loginLogo.png')} alt=""/>
            </div>
        </div>
    }
}

export default connect()(LoginRegisterBase)