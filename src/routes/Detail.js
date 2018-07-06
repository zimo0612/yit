import React from 'react'
import {connect} from 'react-redux'
import '../static/css/Detail.less'
import {Link, withRouter} from 'react-router-dom'
import {Icon} from 'antd';
import Qs from 'qs';
import {queryProductData} from '../API/detail';

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            result:{},
            n:1
        }
    }

    async componentWillMount(){
        let id = parseFloat(Qs.parse(this.props.history.location.search.slice(1)).id);
        let result = await queryProductData(id);
        this.setState({
            result
        })
    }

    render() {
        let {result,n} = this.state;
        if(result.data === undefined) return '';
        let {pic,title,desc,price,currentPrice,vPrice} = result.data[0];

        return <div className={'DetailBox'}>
            <div className={'show'}>
                <img src={pic} alt=""/>
            </div>

            <div className="info">
                <div className="info-describe">
                    <p>{title}</p>
                    <p>{desc}</p>
                </div>
                <div className="collect"><Icon type={'star-o'}/><p>收藏</p></div>
                <div className={'price'}>
                    <span>日销价 <span>¥{price}</span></span>
                    <span>全场包邮</span>
                </div>
                <div className="VIP-price">
                    <span>VIP价 ¥{vPrice}</span>
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

            <div className={'confirm'} ref={'confirm'} style={{display: 'none'}}>
                <Icon type="close" className={'close-Btn'} onClick={this.close}/>
                <div className="confirm-info">
                    <div className={'show'}>
                        <img src="https://img01.yit.com/media/b2f66b9c-8828-4e5a-b5c9-1d3fe5acaaa5.jpg-620.466.80"
                             alt=""/>
                        <div className={'price'}><span>日销价</span><span>¥{price}</span></div>
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
                <Link to={'/shopcart'} className={'go-shopcart'}>加入购物车</Link>
            </div>
        </div>
    }

    handleConfirm = ev => {
        let {mask, confirm} = this.refs;
        mask.style.display = 'block';
        confirm.style.display = 'block'
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

}

export default withRouter(connect()(Detail));