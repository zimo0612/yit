import React from 'react'
import {connect} from 'react-redux'
import {Icon,Badge} from 'antd'
import {Link} from 'react-router-dom'
import Recommend from '../../component/Recommend'
class Tip extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return <div>
            <div className='Tip-header'>
                <Link to='/personal/center' className='Tip-setting' >
                    <Icon type="setting"   />
                </Link>
                <Link to='/gologin'>
                    <div className='Tip-main'>
                        <div className='Tip-user'>
                            <Icon type='user' style={{color:"#ccc"}}/>
                        </div>
                        <div className='Tip-text'>
                            <p className='Tip-login' style={{color:"#000"}}>点击头像登录</p>
                            <p className='Tip-vip'>开通VIP立享9.5折</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='personal-F'>
                <div className="personal-collection">
                    <span>收藏</span>
                </div>
                <div className="personal-foot"><span>足迹</span></div>
            </div>
            <div className='personal-oder'>
                <ul className='personal-list'>
                    <li><Link to='/gologin' style={{color:"rgba(0,0,0,.7)"}}><Icon type="credit-card" /><span>待付款</span></Link></li>
                    <li><Link to='/gologin' style={{color:"rgba(0,0,0,.7)"}}><Icon type="gift" /><span>待发货</span></Link></li>
                    <li><Link to='/gologin' style={{color:"rgba(0,0,0,.7)"}}><Icon type="rocket" /><span>待收货</span></Link></li>
                    <li><Link to='/gologin' style={{color:"rgba(0,0,0,.7)"}}><Icon type="pay-circle-o" /><span>退款/售后</span></Link></li>
                    <li><Link to='/gologin' style={{color:"rgba(0,0,0,.7)"}}><Icon type="profile" /><span>我的订单</span></Link></li>
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

export default connect()(Tip)