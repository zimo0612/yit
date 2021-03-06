import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom'
import action from "../../store/action";
import Qs from 'qs'


class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: 1
        }

    }

    componentWillMount() {
        let {id = 1} = Qs.parse(this.props.location.search.substr(1)) || {};
        this.id = id;
        let {SubTypeProduct, subTypeProduct} = this.props;
        if (subTypeProduct.length === 0) {
            SubTypeProduct(id);
        } else {
            let res = subTypeProduct.find((item, index) => {
                return parseFloat(id) === parseFloat(item.subTypeId)
            });
            if (!res) {
                SubTypeProduct(id);
            }
        }
    }

    render() {
        let {subTypeProduct} = this.props;

        if (subTypeProduct.length === 0) return "";
        let isData = subTypeProduct.find(item => {
            return item.subTypeId === this.id
        });

        if (!isData) return "";

        let result = subTypeProduct.find(item => {
            return item.subTypeId === this.id
        });


        return <div className='listBox'>
            <div className='overall'>
                {
                    result.data.length === 0 ? <h3 style={{width: "100%", fontSize: ".32rem"}}>没有更多数据</h3> : <ul>
                        {result.data.map((item, index) => {
                            return <li key={index}>
                                <Link to={`/detail?id=${item.id}`}>
                                    <div className='image'>
                                        <img src={item.pic} alt=""/>
                                    </div>
                                    <div className='about-goods_info'>
                                        <div className='cms-product_title-info'>
                                            {item.title}
                                        </div>
                                        <div className='cms-product_title-sub'>
                                            {item.desc}
                                        </div>
                                        <div className='cms-product_price-normal'>
                                            <span className='normal-left'>￥{item.currentPrice}</span>
                                            <span className='normal-right'>￥{item.price}</span>
                                        </div>
                                        <div className='cms-product_price-reduced'>
                                            <span className='reduced-left'>会员价</span>
                                            <span className='reduced-right'>{item.vPrice}</span>
                                        </div>
                                        <div className='cms-product__tag-box'>
                                            <span className='tag-box-left'>{item.activeType}</span>
                                            <span className='tag-box-right'>露肤节</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        })}
                    </ul>
                }
            </div>
        </div>
    }
}

export default connect(state => state.category, action.category)(List);