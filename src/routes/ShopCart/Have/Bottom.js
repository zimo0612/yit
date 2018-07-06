import React from 'react';
import {connect} from 'react-redux'
import {Icon,Checkbox} from 'antd'

//多选框
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class Bottom extends React.Component {
    constructor(props,context) {
        super(props,context)
    }

    render() {
        return <div>
            <div className={'Hot'}>
                <div className={'top'}>
                    <i/>
                    <p>成为VIP,本单可省<span>00.00元</span></p>
                    <a className={'span'}>查看详情></a>
                </div>
                <div className={'bottom'}>
                <span className={'I'}>
                    <Icon type="check" className={'i'}/>
                </span>
                    <a href="javascript:;">全部选择</a>
                    <p>合计:￥<span>00.00</span></p>
                    <span className={'sp'}>结算</span>
                </div>
            </div>
        </div>
    }
}
export default connect()(Bottom);