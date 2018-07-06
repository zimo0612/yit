import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'
import CheckMore from "../CheckMore";
import action from "../../../store/action";

class Today extends React.Component {
    constructor(props, context) {
        super(props, context)
    }


    render() {
        let {product} = this.props;
        if (product.length === 0) return '';
        return <div className={'prd'}>
            {
                product[0].item.map((item, index) => {
                    let {id,pic,price,vPrice,currentPrice,title}=item;
                    return <div className={'prdItem'} id={id} key={index}>
                        <Link to={`/detail?id=${id}`}>
                            <img src={pic}
                                 alt=""/>
                            <div className={'ellipsis'}>{title}</div>
                            <div className={'price'}><span>¥{price}</span><span>¥{currentPrice}</span></div>
                            <div className={'VIP-price'}><span>会员价</span><span>¥{vPrice}</span></div>
                            <div className={'tagBox'}><span>前30件再减200元</span></div>
                        </Link>
                    </div>
                })
            }
            <div className="prdMore">
                <Link to={'/home/checkmore'}>
                    <div className={'More'}>查看更多</div>
                    <div className={'m-More'}>MORE</div>
                    <Icon type="right-circle-o" style={{color: '#ad0e11', fontSize: '16px'}}/>
                </Link>
            </div>


        </div>

    }
}

export default connect(state => ({...state.home}), action.home)(Today);