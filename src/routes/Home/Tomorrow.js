import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'


 class Tomorrow extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div className={'prd'}>
            <div className={'prdItem'}>
                <a href="">
                    <img src="http://img01.yit.com/media/1cab180c-395c-46a3-828d-9ee5449ef66d.jpg?imageView2/0/w/265" alt=""/>
                    <div className={'ellipsis'}>古代皇帝补身子的桑椹膏</div>
                    <div className={'price'}><span>¥82</span><span>¥98</span></div>
                    <div className={'VIP-price'}><span>会员价</span><span>¥77.9</span></div>
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

export default connect()(Tomorrow);