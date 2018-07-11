import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import action from '../store/action';

class recommend extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    componentWillMount(){
        if(this.props.recommendData.length===0){
            this.props.queryRecommendData(1);
        }
    }

    render() {
        if(this.props.recommendData.length===0) return "";
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
                {this.props.recommendData.map((item, index) => {
                    let {pic, title, desc, currentPrice, price, vPrice,id} = item;

                    return <li className={'li'} key={index}>
                        <Link className={'bottomBox'} to={`/detail?id=${id}`}>
                            <img src={pic} alt=""/>
                            <div className={'item'}><h3>{title}</h3>
                                <p>{desc}</p>
                                <span>¥{price}</span>&nbsp;&nbsp;<span className={'span'}>¥{currentPrice}</span>
                            </div>
                            <div className={'VIP-price'}><span className={'VP'}>会员价</span><span className={'PV'}>¥{vPrice}</span></div>
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    }
}

export default connect(state=>({...state.shopCarts}),action.shopCarts)(recommend);