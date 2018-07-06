import React from 'react'
import {connect} from 'react-redux'
import {Icon,Badge} from 'antd'
import action from "../../store/action";
import {Link} from 'react-router-dom'
import Recommend from '../../component/Recommend'
 let img = require("../../static/img/touxiang.png");

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
     componentWillMount(){
        let {baseInfo,queryUserInfo} = this.props;
        if (!baseInfo){
            queryUserInfo()
        }

     }
    render() {
        let {baseInfo} = this.props;
        if (!baseInfo)return '';
       let {name,phone} = baseInfo;



        return  <div>
            <div className='Info-header'>
                <Link to='/personal/center' className='Info-setting'>
                    <Icon type="setting" />
                </Link>
                    <div className='Info-main'>
                        <div className='Info-user'>
                            <img src={img} alt="" style={{width:"100%", marginTop:" -.32rem"}}/>
                        </div>
                        <div className='Info-text'>
                            <p className='Info-login'>{name}</p>
                            <p className='Info-login'>{phone.substr(0,3)+'****'+phone.substr(7,5)}</p>
                            <p className='Info-vip'>普通会员</p>
                        </div>
                        <div className='Info-qr'>
                            <Icon type='qrcode'/>
                            <span className='Info-span'>用户码</span>
                        </div>
                        <div className='Info-footer'>
                            <span className='Info-footer1'>开通VIP立享9.5折</span>
                            |
                            <span className='Info-footer2'>会员俱乐部</span>
                        </div>
                    </div>

            </div>
            <div className='personal-F'>
                <div className="personal-collection"><Badge count={6}>
                    <span>收藏</span>
                </Badge></div>
                <div className="personal-foot"><span>足迹</span></div>
            </div>
            <div className='personal-oder'>
                <ul className='personal-list'>
                    <li><Link to='/personal/orderlist' style={{color:"rgba(0,0,0,.7)"}}><Icon type="credit-card" /><span>待付款</span></Link></li>
                    <li><Link to='/personal/orderlist' style={{color:"rgba(0,0,0,.7)"}}><Icon type="gift" /><span>待发货</span></Link></li>
                    <li><Link to='/personal/orderlist' style={{color:"rgba(0,0,0,.7)"}}><Icon type="rocket" /><span>待收货</span></Link></li>
                    <li><Link to='/personal/orderlist' style={{color:"rgba(0,0,0,.7)"}}><Icon type="pay-circle-o" /><span>退款/售后</span></Link></li>
                    <li><Link to='/personal/orderlist' style={{color:"rgba(0,0,0,.7)"}}><Icon type="profile" /><span>我的订单</span></Link></li>
                </ul>
            </div>
            <div className='personal-img'>
                <img src="http://imgcms.yit.com/cmsres/20180702/a21d5854-87f2-4a8b-82c9-363e72310c7a_750X180.jpeg" alt=""/>
            </div>
            <div className='personal-server'>
                <h2>我的服务</h2>
                <ul>
                    <li><i className="iconfont icon-wodeyouhuiquan"/><span>优惠券</span></li>
                    <li><i className="iconfont icon-jifen"/><span>积分</span></li>
                    <li><i className="iconfont icon-tuangou"/><span>我的拼团</span></li>
                    <li><i className="iconfont icon-gifs"/><span>分享有礼</span></li>
                </ul>
                <ul>
                    <li><i className="iconfont icon-kefu"/><span>客服</span></li>
                    <li><i className="iconfont icon-wenhao"/><span>帮助</span></li>
                    <li><i className="iconfont icon-dingwei1"/><span>地址</span></li>
                    <li><i className="iconfont icon-qiapian"/><span>相关信息</span></li>
                </ul>
                <ul className='personal-last'>
                    <li><i className="iconfont icon-liaotian"/><span>FAQ</span></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div style={{background:"#f4f4f4",width:"100%" ,height:".2rem"}}></div>
            <div><img src="http://imgcms.yit.com/cmsres/20171123/24dfe209-125c-4703-af6b-23ee2e5896f3_750X270.jpeg" alt="" style={{width:"100%"}}/></div>
            <div><img src="http://imgcms.yit.com/cmsres/20180112/1946cb8e-b59b-4dba-a7f3-039461b8b53a_750X270.png" alt="" style={{width:"100%"}}/></div>
            <Recommend/>
        </div>
    }

}

export default connect(state=>({...state.personal}),action.personal)(Info)