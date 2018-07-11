import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {Icon, Modal} from "antd"
import {login} from '../../API/personal'
import md5 from 'blueimp-md5'
import action from "../../store/action";

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    handleClick = async () => {
        let name = this.refs.input1.value.trim();
        let password = this.refs.input2.value.trim();
        password = md5(password);
        if (name.length !== 11 || password.length === 0) {
            Modal.error({
                title: '我知道你不是随便的人！',
                content: '再想想你的账号或者密码！',
            });
        } else {
            let result = await login({
                name,
                password
            });
            if(parseFloat(result.code)===0){
                this.props.checkLogin();
                this.props.queryUserInfo();
                this.props.history.go(-2);
            }else {
                Modal.error({
                    title: '我知道你不是随便的人！',
                    content: '再想想你的账号或者密码！',
                });
            }
        }
    };

    render() {
        return <div className='LoginBox'>
            <div className='Login-header'>
                <div className='Login-left' onClick={() => {
                    this.props.history.go(-1)
                }}><Icon type="left"/></div>
                <span className='Login-span'>手机号登录</span>
                <div className='Login-close' onClick={() => {
                    this.props.history.go(-2)
                }}><Icon type="close"/></div>
            </div>
            <div className='Login-main'>
                <div className="Login-logo">
                    <h1>一条</h1>
                </div>
                <div className='Login-input'>
                    <div className='Login-num'>+86</div>
                    <input ref="input1" type="number" className='Login-input1'
                           placeholder="请输入手机号" maxLength="11"/>
                    <input type="password" ref="input2" className='Login-input2'
                           placeholder="请输入密码" maxLength="11"/>
                    <Link to='/personal/Register'>还没有账号? 去注册</Link>
                    <div className="Login-Button">
                        <div className='Login-Button' onClick={this.handleClick}><span>登录</span></div>
                    </div>
                    <div className="Login-P">
                        <p style={{fontSize: ".2rem"}}>
                            若您输入的手机号未注册，将会进入注册流程。注册即视为同意
                            一条<span style={{color: "blue"}}>用户服务协议</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withRouter(connect(state => ({...state.personal}), action.personal)(Login))