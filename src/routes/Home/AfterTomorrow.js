import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'


 class AfterTomorrow extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div className={'prd'}>

            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/2494097d-592e-4031-9305-91c89f475c03.jpg?imageView2/0/w/265" alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/2494097d-592e-4031-9305-91c89f475c03.jpg?imageView2/0/w/265" alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/2494097d-592e-4031-9305-91c89f475c03.jpg?imageView2/0/w/265" alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/2494097d-592e-4031-9305-91c89f475c03.jpg?imageView2/0/w/265" alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/2494097d-592e-4031-9305-91c89f475c03.jpg?imageView2/0/w/265" alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/2494097d-592e-4031-9305-91c89f475c03.jpg?imageView2/0/w/265" alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/2494097d-592e-4031-9305-91c89f475c03.jpg?imageView2/0/w/265" alt=""/>
                    <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                    <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                </a>
            </div>
            <div className="prdMore">
                <a href="">
                    <div className={'More'}>查看更多</div>
                    <div className={'m-More'}>MORE</div>
                    <Icon type="right-circle-o" style={{color:'#ad0e11',fontSize:'16px'}}/>
                </a>
            </div>

        </div>
    }
}

export default connect()(AfterTomorrow);