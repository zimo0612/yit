import React from 'react'
import {connect} from 'react-redux'
// import {checkLogin,out} from '../../API/personal'
import {Icon} from 'antd'
import {withRouter} from 'react-router-dom'
import action from '../../store/action';

class Person_Center extends React.Component {
    constructor(props, context) {
        super(props, context);
        /*this.state = {
            isLogin:false
        }*/
    }
    /*async componentWillReceiveProps(){
        let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
        this.setState({isLogin})

    }*/

    componentWillMount(){
        if(!this.props.isLogin){
            this.props.checkLogin();
        }
    }

    render() {
        return <div className='Center'>
            <div className="Center-header" onClick={()=>{
                if (this.props.isLogin){
                  return;
                }
            }}>
                <div className='Center-user' style={{lineHeight:"1.8rem"}}>
                    <Icon type='user' style={{color:"#ccc",fontSize:".8rem" ,width:"1.5rem"}}/>
                </div>
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
            {this.props.isLogin?( <div className="Center-footer" onClick={ ()=>{
                this.props.userLogOut();
                this.props.history.push('/personal');
                this.props.clearShopCartData();
            }}>
                退出登录
            </div>):''}
        </div>
    }

}

export default withRouter(connect(state=>({...state.personal}),{...action.personal,...action.shopCarts})(Person_Center))