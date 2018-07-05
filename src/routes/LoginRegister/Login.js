import React from 'react'
import {connect} from 'react-redux'

import {NavLink,withRouter} from 'react-router-dom'
import {login} from '../../api/person'

import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let {password,phone}=values;
                console.log(phone, password);
                let result=await login({phone,password});
                console.log(22);
                console.log(result);
                if (result.code==0){
                    this.props.history.go(-1);
                }
            }
        });
    };

    render() {


        const {getFieldDecorator} = this.props.form;
        return <div className="loginBox">
            <div className="title">老用户登录</div>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('phone', {
                        rules: [{required: true, message: '请输入你的手机号!'}],
                    })(
                        <Input placeholder="请输入手机号"/>
                    )}
                </FormItem>
                <div className="password">
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入你的密码!'}],
                        })(
                            <Input type="password" placeholder="请输入密码"/>
                        )}
                    </FormItem>
                    <a className="login-form-forgot forgot" href="">忘记密码</a>
                </div>

                <FormItem>
                    {/*{getFieldDecorator('remember', {
                       valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}*/}

                    <a href="" className="phoneLogin">
                        <span>手机号快捷登录</span>
                        <Icon type="right"/>
                    </a>
                    <a href="#">
                        <Button type="primary" htmlType="submit" className="login-form-button green">
                            登录
                        </Button>
                    </a>

                    <NavLink to="/register"><Button className='gray'>
                        注册
                    </Button></NavLink>
                </FormItem>
            </Form>
        </div>

    }
}

export default withRouter(Form.create()(connect()(Login)));