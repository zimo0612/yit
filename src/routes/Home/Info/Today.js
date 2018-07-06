import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'
import CheckMore from "../CheckMore";

class Today extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div className={'prd'}>
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

export default connect()(Today);