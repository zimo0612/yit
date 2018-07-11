import React from 'react'
import {connect} from 'react-redux'
import '../static/css/Detail.less'
import {Link, withRouter} from 'react-router-dom'
import {Icon} from 'antd';
import Qs from 'qs';
import {queryProductData} from '../API/detail';
import action from '../store/action';

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            result: {},
            n: 1
        };
    }

    async componentWillMount() {
        let id = parseFloat(Qs.parse(this.props.history.location.search.slice(1)).id) || 1;
        let result = await queryProductData(id);
        this.setState({
            result
        });
        if(this.props.shopCartData.length===0){
            this.props.queryShopCartInfo(0);
        }
    }

    componentDidMount(){
        console.log(this.props);
        if(!this.props.isLogin){
            this.props.checkLogin();
        }
    }

    render() {
        let {result, n} = this.state;
        if (result.data === undefined) return '';
        let {pic, title, desc, price, vPrice,id} = result.data[0];
        this.id = id;

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
                <a href={'javascript:;'} className={'take'} onClick={this.handleConfirm}>加入购物车</a>
                <a href={'javascript:;'} className={'buy-it'} >立即购买</a>
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
                <a href={'javascript:;'} className={'go-shopcart'} onClick={this.submitProduct}>加入购物车</a>
            </div>
        </div>
    }

    submitProduct = ev => {
        this.close();
        let item = this.props.shopCartData.find(item=>{
            this.beforeAmount = item.amount;
            return item.item.id===this.id;
        });
        //=>和redux中有和当前商品id相同的，走修改数量流程
        if(item){
            this.props.editShopCartData(this.id,this.beforeAmount+this.state.n);
            return;
        }
        //=>和redux中没有相同商品的，走添加流程
        this.props.addShopCartData(this.id,this.state.n,this.state.result.data[0]);
    };

    handleConfirm = ev => {
        if(this.props.isLogin){
            let {mask, confirm} = this.refs;
            mask.style.display = 'block';
            confirm.style.display = 'block';
        }else{
            this.props.history.push('/gologin');
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

}

export default withRouter(connect(state=>({...state.shopCarts,...state.personal}),{...action.personal,...action.shopCarts})(Detail));