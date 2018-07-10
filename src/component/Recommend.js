import React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'antd';
import {salesCart} from '../API/shopCarts';

class recommend extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isRun: false
        }
    }

    async componentDidMount() {
        this.retuls = await salesCart();
        this.setState({
            isRun: true
        })
    }


    render() {

        if (!this.state.isRun) return "";
        if (this.retuls.data.length === 0) return "暂无数据";

        return <div className={'liveBox'}>
            <div className={'topBox'}>
                <div className={'like'}>
                    <div className={'show'}></div>
                    <div className={'xihuan'}>
                        <Icon type="heart-o" className={'I'}/>
                        &nbsp;&nbsp;猜你喜欢
                    </div>
                </div>
            </div>
            <ul className={'ul'}>
                {this.retuls.data.map((item, index) => {
                    let {pic, title, desc, currentPrice, price, vPrice} = item;

                    return <li className={'li'} key={index}>
                        <a href={'javascript:;'} className={'bottomBox'}>
                            <img src={pic} alt=""/>
                            <div className={'item'}><h3>{title}</h3>
                                <p>{desc}</p>
                                <span>¥{price}</span>&nbsp;&nbsp;<span className={'span'}>¥{currentPrice}</span>
                            </div>
                            <div className={'VIP-price'}><span className={'VP'}>会员价</span><span className={'PV'}>¥{vPrice}</span></div>
                        </a>
                    </li>
                })}


            </ul>
        </div>
    }
}

export default connect()(recommend);