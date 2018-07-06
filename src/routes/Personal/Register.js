import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {Icon, Button, Form, Input, Row, Col} from "antd"
import {login, register} from '../../API/personal'
import md5 from 'blueimp-md5'

import {Modal} from "antd/lib/index";
import action from "../../store/action";

const FormItem = Form.Item;


class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            code: 60,

        }

    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                values.password = md5(values.password);
                let result = await register(values);
                if (parseFloat(result.code) === 0) {
                    this.props.queryUserInfo();
                    this.props.history.push('/personal/info');
                    return;
                }
            }
            Modal.error({
                title: '注册失败！',
                content: '请检查用户名或密码是否正确，亲',
            });
        })
    };
    getTest = () => {
        let str = '';
        let num = null;
        while (str.length < 6) {
            num = Math.floor(Math.random() * 10);
            str += num;
        }
        return str;
    };
    queryTest = () => {
        this.timer = setInterval(() => {
            if (this.state.code === 0) {
                clearInterval(this.timer);
                return;
            }
            if (!this.refs.test) {
                clearInterval(this.timer);
                return;
            }
            this.setState({
                code: this.state.code - 1
            });
            this.refs.test.innerHTML = `重新发送(${this.state.code})`;
            this.refs.test.style.color = "red";
        }, 1000);
        this.refs.test.innerHTML = `重新发送(${this.state.code})`;
        this.refs.test.style.color = "red";
        setTimeout(() => {
            this.props.form.setFieldsValue({
                test: this.getTest()
            });
        }, 2000)
    };

    render() {


        const {getFieldDecorator, setFieldsValue} = this.props.form;
        const formItemLayout = {};
        return <section className='RegisterBox'>
            <div className='Register-header'>
                <div className='Register-left' onClick={() => {
                    this.props.history.go(-1)
                }}><Icon type="left"/></div>
                <span className='Register-span'>用户注册</span>
                <div className='Register-close' onClick={() => {
                    this.props.history.go(-1)
                }}><Icon type="close"/></div>
            </div>
            <div className="Register-logo">
                <h1>一条</h1>
            </div>
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout}>
                    {getFieldDecorator('name', {
                        rules: [
                            {required: true, message: "请输入正确的用户名！"}
                        ]
                    })(<Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入用户名"/>)}

                </FormItem>
                <FormItem {...formItemLayout} >
                    {getFieldDecorator('password', {
                        rules: [
                            {required: true, message: "请输入密码！"},
                        ]
                    })(<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type='password'
                              placeholder="请输入密码"/>)}
                </FormItem>
                <FormItem {...formItemLayout}>
                    {getFieldDecorator('email', {
                        rules: [
                            {required: true, message: "请输入的邮箱！"},
                            {type: 'email', message: "邮箱格式不正确！"}
                        ]
                    })(<Input prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入邮箱"/>)}

                </FormItem>
                <FormItem {...formItemLayout} >
                    {getFieldDecorator('phone', {
                        rules: [
                            {required: true, message: "请输入手机号！"},
                        ]
                    })(<Input prefix={<Icon type="mobile" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入手机号"/>)}
                </FormItem>
                <FormItem {...formItemLayout} className='formLast'>
                    <div ref='test' className='sendTest' onClick={this.queryTest}
                    >发送验证码
                    </div>
                    {getFieldDecorator('test', {
                        rules: [
                            {required: true, message: "请输入验证码！"},
                        ]
                    })(<Input id='inputTest' placeholder="请输入验证码"/>)}

                </FormItem>

                <FormItem>
                    <Button className='regButton' type='danger' style={{background: "red", color: "#fff"}}
                            htmlType='submit'>立即注册</Button>
                </FormItem>
            </Form>
        </section>
    }
}

export default Form.create()(withRouter((connect(state => state.personal, action.personal)(Register))))