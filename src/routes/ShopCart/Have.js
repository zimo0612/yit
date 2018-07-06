import React from 'react';
import {Icon, Modal, Checkbox} from 'antd'

import {removeShopCart} from '../../API/shopCarts'

import Bottom from './Have/Bottom'

export default class Have extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            n: 5,
            m: 199
        }

    }


    render() {
        return <div>
            <div className={'allCartList'}>
                <ul className={'list'}>
                    <li>
                 <span className={'left'}>
                   <Checkbox/>
                </span>
                        <div className={'right'}>
                            <img src='https://img01.yit.com/5/7/57ac50c8ba2d6.jpg-620.466.80' alt=""/>
                            <div className={'title'}>
                                <h3>小魔方•组合斗柜 橙舍</h3>
                                <p>标准版 现货/2个工作日发货</p>
                                <span>￥{this.state.m * this.state.n}</span>
                                <div className={'icon'}>
                                    <Icon type="minus-circle-o" className={'tl'} onClick={this.minus}/>
                                    <h4>{this.state.n}</h4>
                                    <Icon type="plus-circle-o" className={'tz'} onClick={this.addition}/>
                                    <Icon type="close" className={'tr'} onClick={this.showDeleteConfirm}/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <Bottom ref='stand'/>
            </div>
        </div>
    }

    //减少
    minus = ev => {
        if (this.state.n <= 1) return;

        this.setState({
            n: this.state.n - 1,
        })
    };


    addition = ev => {
        this.setState({
            n: this.state.n + 1,
        })
    };


    showDeleteConfirm = ev => {
        Modal.confirm({
            content: '你确定要删除该商品',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                /*确定做什么*/
            },
            onCancel() {
                /*取消做什么*/
            },
        });
    }


}