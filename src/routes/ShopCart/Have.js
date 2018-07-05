import React from 'react';
import {Icon} from 'antd'

import Bottom from './Have/Bottom'

export default class Have extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <div className={'allCartList'}>
                <ul className={'list'}>
                    <li>
                 <span className={'left'}>
                    <Icon type="check"/>
                </span>
                        <div className={'right'}>
                            <img src='https://img01.yit.com/5/7/57ac50c8ba2d6.jpg-620.466.80' alt=""/>
                            <div className={'title'}>
                                <h3>小魔方•组合斗柜 橙舍</h3>
                                <p>标准版 现货/2个工作日发货</p>
                                <span>￥199.00</span>
                                <div className={'icon'}>
                                    <Icon type="minus-circle-o" className={'tl'}/>
                                    <h4>1</h4>
                                    <Icon type="plus-circle-o" className={'tz'}/>
                                    <Icon type="close" className={'tr'}/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <Bottom/>
            </div>
        </div>
    }
}