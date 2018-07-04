import React from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import {Icon,Button,Form,Input, Row, Col} from "antd"
import {login,register} from '../../API/personal'
import  md5 from 'blueimp-md5'

import {Modal} from "antd/lib/index";
import action from "../../store/action";

const FormItem = Form.Item;


class Register extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                values.password = md5(values.password);
                let result = await register(values);
                if (parseFloat(result.code) === 0) {
                  // this.props.queryBaseInfo();
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
    render() {
        const {getFieldDecorator}=this.props.form;
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
        return <section className='RegisterBox'>
            <div className='Register-header'>
                <div className='Register-left' onClick={()=>{
                    this.props.history.go(-1)
                }}><Icon type="left"/></div>
                <span className='Register-span'>用户注册</span>
                <div className='Register-close' onClick={()=>{
                    this.props.history.go(-1)
                }}><Icon type="close"/></div>
            </div>
            <div className="Register-logo">
                <h1>一条</h1>
            </div>
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label='用户名'>
                    {getFieldDecorator('name', {
                        rules: [
                            {required: true, message: "请输入正确的用户名！"}
                        ]
                    })(<Input/>)}

                </FormItem>
                <FormItem {...formItemLayout} label='邮箱'>
                    {getFieldDecorator('email', {
                        rules: [
                            {required: true, message: "请输入的邮箱！"},
                            {type: 'email', message: "邮箱格式不正确！"}
                        ]
                    })(<Input/>)}
                </FormItem>
                <FormItem {...formItemLayout} label='手机'>
                    {getFieldDecorator('phone', {
                        rules: [
                            {required: true, message: "请输入手机号！"},
                        ]
                    })(<Input/>)}
                </FormItem>
                <FormItem {...formItemLayout} label='密码'>
                    {getFieldDecorator('password', {
                        rules: [
                            {required: true, message: "请输入密码！"},
                        ]
                    })(<Input type='password'/>)}
                </FormItem>
                <FormItem >
                    <Button type='primary' htmlType='submit'>立即注册</Button>
                </FormItem>
            </Form>
        </section>
    }
}
export default Form.create()(connect()(Register))