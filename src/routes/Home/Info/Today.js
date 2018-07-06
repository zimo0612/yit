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
        let {product}=this.props;
        return <div className={'prd'}>
            {product.map((value,index)=>{
                let {item}=value;
                let {pic,price,vPrice,currentPrice,id,title}=item;
                return <div className={'prdItem'} key={index}>
                    <Link to={`/detail?id=${id}`}>
                        <img src={pic}
                             alt=""/>
                        <div className={'ellipsis'}>{title}</div>
                        <div className={'price'}><span>¥{price}</span><span>¥{currentPrice}</span></div>
                        <div className={'VIP-price'}><span>会员价</span><span>¥{vPrice}</span></div>
                        <div className={'tagBox'}><span>前30件再减200元</span></div>
                    </Link>
                </div>
            })}
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                         alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                         alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                         alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                         alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                         alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                         alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                         alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                         alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className="prdMore">
                <Link to={'/home/checkmore'}>
                    <div className={'More'}>查看更多</div>
                    <div className={'m-More'}>MORE</div>
                    <Icon type="right-circle-o" style={{color:'#ad0e11',fontSize:'16px'}}/>
                </Link>
            </div>


        </div>

    }
}

export default connect(state => ({...state.home}), action.home)(Today);