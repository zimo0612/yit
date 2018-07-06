import React from 'react';
import {connect} from 'react-redux'
import {Icon} from 'antd'

class recommend extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div>

            <div className={'liveBox'}>
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
                    <li className={'li'}>
                        <a  href={'javascript:;'} className={'bottomBox'}>
                            <img src='https://img01.yit.com/5/7/57ac50c8ba2d6.jpg-620.466.80' alt=""/>
                            <div className={'item'}><h3>可自由组合的竹斗柜</h3>
                                <p>竹子来自武夷山，自由组合可叠放，环保零甲醛，单个出售</p>
                                <span>¥199</span>&nbsp;
                                <span className={'span'}>¥249</span>
                            </div>
                            <span className={'HOT'}>¥189.05</span>
                        </a>
                    </li>
                    <li className={'li'}>
                        <a  href={'javascript:;'} className={'bottomBox'}>
                            <img src='https://img01.yit.com/media/cb931168-4f8b-4cef-ae04-d603be4d8d72.jpg-620.466.80' alt=""/>
                            <div className={'item'}><h3>可自由组合的竹斗柜</h3>
                                <p>竹子来自武夷山，自由组合可叠放，环保零甲醛，单个出售</p>
                                <span>¥199</span>&nbsp;
                                <span className={'span'}>¥249</span>
                            </div>
                            <span className={'HOT'}>¥189.05</span>
                        </a>
                    </li>
                    <li className={'li'}>
                        <a  href={'javascript:;'} className={'bottomBox'}>
                            <img src='https://img01.yit.com/5/7/57ac50c8ba2d6.jpg-620.466.80' alt=""/>
                            <div className={'item'}><h3>可自由组合的竹斗柜</h3>
                                <p>竹子来自武夷山，自由组合可叠放，环保零甲醛，单个出售</p>
                                <span>¥199</span>&nbsp;
                                <span className={'span'}>¥249</span>
                            </div>
                            <span className={'HOT'}>¥189.05</span>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    }
}

export default connect()(recommend);