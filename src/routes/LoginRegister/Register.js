import React from 'react'
import {connect} from 'react-redux'
import {withRouter,NavLink} from 'react-router-dom'
import {register} from '../../api/person'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class Register extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let {phone,password}=values;
                let result=await register({phone,password});
                console.log(result);
                if (parseFloat(result.code)===0){
                    this.props.history.go(-1);
                }
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return <div className="registerBox">
            <div className="title">新用户注册</div>
            <Form>
                <FormItem
                    {...formItemLayout}
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入您的手机号码!' }],
                    })(
                        <Input placeholder="请输入手机号" style={{ width: '100%' }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入您的密码!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" placeholder="请设置6-20位密码,包含字母、数字或符号"/>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>阅读并同意《丽芙家居用户协议》和《隐私声明》</Checkbox>
                    )}
                </FormItem>

                {

                }
                <a href="#">
                    <Button type="primary" htmlType="submit" className="login-form-button green" onClick={this.handleSubmit}>
                        注册
                    </Button>
                </a>

                <NavLink to="/login"><Button className='gray' >
                    登录
                </Button></NavLink>
            </Form>
        </div>
    }
}

export default withRouter(Form.create()(connect()(Register)))