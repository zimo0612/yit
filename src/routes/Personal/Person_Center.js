import React from 'react'
import {connect} from 'react-redux'
import {checkLogin,out} from '../../API/personal'
import {Card,Icon} from 'antd'
import {withRouter} from 'react-router-dom'

class Person_Center extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLogin:false
        }
    }
    async componentWillReceiveProps(){
        let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
        this.setState({isLogin})

    }

    render() {
        return <div className='Center'>
            <div className="Center-header">
                <div className='Center-logo' ><Icon type='smile-o'></Icon></div>
                <span className='Center-person'>个人信息</span>
                <Icon type='right' className='Center-right'></Icon>
            </div>
            <div className="Center-main">
                <div className="Center-address">
                    <span className='Center-span1'>设置收货地址</span>
                    <Icon type='right' className='Center-right1'></Icon>
                </div>
                <div className="Center-tiao">
                    <span className='Center-span2'>关于一条</span>
                    <Icon type='right' className='Center-right2'></Icon>
                </div>
                <div className="Center-us">
                    <span className='Center-span3'>意见反馈</span>
                    <Icon type='right' className='Center-right3'></Icon>
                </div>
            </div>
            {this.state.isLogin?( <div className="Center-footer" onClick={ async ()=>{
                     await out();
                     this.props.history.push('/personal')
            }}>
                退出登录
            </div>):''}


        </div>
    }

}

export default withRouter(connect()(Person_Center))