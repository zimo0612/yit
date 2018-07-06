import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
 class CheckMore extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div className={'checkMoreBox'}>
            <div className={'header'}>
                <div className="VIP-banner"><img src="https://asset.yit.com/flash_sale/daily_banner.png" alt="" /></div>
                <div className="tabBox">
                    <div className="tabItem">
                        <p>7月4日 10:00</p>
                        <p>已经开抢</p>
                    </div>
                    <div className="tabItem-today">
                        <p>7月4日 10:00</p>
                        <p>已经开抢</p>
                    </div>
                    <div className="tabItem-tomorrow">
                        <p>7月4日 10:00</p>
                        <p>已经开抢</p>
                    </div>
                    <div className="tabItem">
                        <p>7月4日 10:00</p>
                        <p>已经开抢</p>
                    </div>
                    <div className="tabItem">
                        <p>7月4日 10:00</p>
                        <p>已经开抢</p>
                    </div>
                    <div className="tabItem">
                        <p>7月4日 10:00</p>
                        <p>已经开抢</p>
                    </div>
                </div>
            </div>
            <div className="timeBuy">
                <ul>
                    <li className={'clearfix'}>
                        <img src="https://img01.yit.com/media/fb45f225-55c2-47ca-a3aa-f4787f74ef7c.jpg" alt=""/>
                        <div className={'info'}>
                            <p>手工蒜蓉酱</p>
                            <p>前50件再打4折</p>
                            <div className="price-info">
                                <div className="price"><span>¥35</span><span>¥39</span></div>
                                <div className="VIP-price"><span>会员价</span><span>¥33.25</span></div>
                                <div className="remind"><Icon type="clock-circle-o" />
                                    <span>提醒</span></div>
                            </div>
                        </div>
                    </li>
                    <li className={'clearfix'}>
                        <img src="https://img01.yit.com/media/fb45f225-55c2-47ca-a3aa-f4787f74ef7c.jpg" alt=""/>
                        <div className={'info'}>
                            <p>手工蒜蓉酱</p>
                            <p>前50件再打4折</p>
                            <div className="price-info">
                                <div className="price"><span>¥35</span><span>¥39</span></div>
                                <div className="VIP-price"><span>会员价</span><span>¥33.25</span></div>
                                <div className="remind"><Icon type="clock-circle-o" />
                                    <span>提醒</span></div>
                            </div>
                        </div>
                    </li>
                    <li className={'clearfix'}>
                        <img src="https://img01.yit.com/media/fb45f225-55c2-47ca-a3aa-f4787f74ef7c.jpg" alt=""/>
                        <div className={'info'}>
                            <p>手工蒜蓉酱</p>
                            <p>前50件再打4折</p>
                            <div className="price-info">
                                <div className="price"><span>¥35</span><span>¥39</span></div>
                                <div className="VIP-price"><span>会员价</span><span>¥33.25</span></div>
                                <div className="remind"><Icon type="clock-circle-o" />
                                    <span>提醒</span></div>
                            </div>
                        </div>
                    </li>
                    <li className={'clearfix'}>
                        <img src="https://img01.yit.com/media/fb45f225-55c2-47ca-a3aa-f4787f74ef7c.jpg" alt=""/>
                        <div className={'info'}>
                            <p>手工蒜蓉酱</p>
                            <p>前50件再打4折</p>
                            <div className="price-info">
                                <div className="price"><span>¥35</span><span>¥39</span></div>
                                <div className="VIP-price"><span>会员价</span><span>¥33.25</span></div>
                                <div className="remind"><Icon type="clock-circle-o" />
                                    <span>提醒</span></div>
                            </div>
                        </div>
                    </li>
                    <li className={'clearfix'}>
                        <img src="https://img01.yit.com/media/fb45f225-55c2-47ca-a3aa-f4787f74ef7c.jpg" alt=""/>
                        <div className={'info'}>
                            <p>手工蒜蓉酱</p>
                            <p>前50件再打4折</p>
                            <div className="price-info">
                                <div className="price"><span>¥35</span><span>¥39</span></div>
                                <div className="VIP-price"><span>会员价</span><span>¥33.25</span></div>
                                <div className="remind"><Icon type="clock-circle-o" />
                                    <span>提醒</span></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default connect()(CheckMore);