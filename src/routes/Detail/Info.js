import React from 'react'
import {connect} from 'react-redux'
import '../../static/css/Detail.less'
import {Switch, Link, Route, NavLink,withRouter} from 'react-router-dom'
import {Icon, Row, Col} from 'antd'
import Home from '../Home'
import ShopCart from '../ShopCart'
import {checkLogin} from "../../API/personal";
import {addShopCart} from "../../API/shopCarts";
import action from "../../store/action";

function onChange(value) {
    console.log('changed', value);
}

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            n: 1,
            isLogin:false
        }
    }
    async componentWillMount() {
        let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
        this.setState({isLogin})
    }
    handleConfirm = ev => {
        if (this.state.isLogin){
            let {mask, confirm} = this.refs;
            mask.style.display = 'block';
            confirm.style.display = 'block'
        } else {
            this.props.history.push('/gologin')
        }

    };

    plus = ev => {
        this.setState({
            n: this.state.n + 1
        })
    };
    reduce = ev => {
        if (this.state.n === 1) return;
        this.setState({
            n: this.state.n - 1
        })
    };

    close = ev => {
        let {mask, confirm} = this.refs;
        mask.style.display = 'none';
        confirm.style.display = 'none'
    };

    send= async()=>{
      let result= await addShopCart(7, 1);
        if (parseFloat(result.code)===0){
            this.props.addShop(1)
        }
    };


    render() {

        let {n} = this.state;
        return <div>
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
                <a className="service"><Icon type="customer-service"/><p>客服</p></a>
                <Link to={'/Home'} className={'goHome'}><Icon type={'home'}/><p>首页</p></Link>
                <Link to={'/ShopCart'} className={'goShopCart'}><Icon type="shopping-cart"/><p>购物车</p></Link>
                <a className={'take'} onClick={this.handleConfirm}>加入购物车</a>
                <a href="javascript:;" className={'buy-it'}>立即购买</a>
            </div>

            <div className="mask" ref={'mask'} onClick={this.close}>

            </div>

            <div className={'confirm'} ref={'confirm'} style={{display: 'none'}} >
                <Icon type="close"  className={'close-Btn'} onClick={this.close}/>
                <div className="confirm-info">
                    <div className={'show'}>
                        <img src="https://img01.yit.com/media/b2f66b9c-8828-4e5a-b5c9-1d3fe5acaaa5.jpg-620.466.80"
                             alt=""/>
                        <div className={'price'}><span>日销价</span><span>¥39</span></div>
                    </div>
                    <div className="math clearfix">
                        <span>购买数量</span>
                        <div className="computed">
                            <a href={'javascript:;'} onClick={this.reduce} className={'reduce'}><Icon
                                type="minus-circle-o" style={{fontSize: '.4rem'}}/></a>
                            <span className={'number'}>{n}</span>
                            <a href={'javascript:;'} onClick={this.plus} className={'plus'}><Icon type="plus-circle-o"
                                                                                                  style={{fontSize: '.4rem'}}/></a>

                        </div>

                    </div>
                </div>
               <Link to={'/shopcart'} onClick={this.send} className={'go-shopcart'}>加入购物车</Link>
            </div>
        </div>
    }
}

export default withRouter(connect(state=>({...state.shopCarts}),action.shopCarts)(Info));