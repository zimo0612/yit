import React from 'react'
import {connect} from 'react-redux'
import '../static/css/Detail.less'
import {Switch, Link, Route, NavLink} from 'react-router-dom'
import {Icon,Row,Col} from 'antd'
import Home from './Home'
import ShopCart from './ShopCart'

 class Detail extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div className={'DetailBox'}>
           <div className={'show'}>
               <img src="https://img01.yit.com/media/b2f66b9c-8828-4e5a-b5c9-1d3fe5acaaa5.jpg-620.466.80" alt=""/>
           </div>

            <div className="info">
                <div className="info-describe">
                    <p>自开启防滴漏油壶</p>
                    <p>倾倒平稳，抬手即停，2种颜色可选，不滴不漏，清洁方便，无油渍残留</p>
                </div>
                <div className="collect"><Icon type={'star-o'}/><p>收藏</p></div>
                <div className={'price'}>
                    <span>日销价 <span>¥58</span></span>
                    <span>全场包邮</span>
                </div>
                <div className="VIP-price">
                    <span>VIP价 ¥55.1</span>
                    <span>开卡立享200元现金价<Icon type={'right'}/></span>
                </div>

                <div className="log-state">
                    <span>京东物流:全国仓发货</span>
                    <span>开卡立享200元现金券<Icon/></span>
                </div>
            </div>



            <div className={'fixed-ft'}>
                <a className="service"><Icon type="customer-service" /><p>客服</p></a>
                <Link to={'/Home'} className={'goHome'}><Icon type={'home'}/><p>首页</p></Link>
                <Link to={'/ShopCart'} className={'goShopCart'}><Icon type="shopping-cart" /><p>购物车</p></Link>
                <a href="javascript:;" className={'take'}>加入购物车</a>
                <a href="javascript:;" className={'buy-it'}>立即购买</a>


            </div>



        </div>
    }
}

export default connect()(Detail);