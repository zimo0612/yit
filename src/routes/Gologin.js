import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'


class Gologin extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return <div className='GoLoginBox'>
            <div className="GoLogin-close" onClick={()=>{
                this.props.history.go(-1);
            }
            }>
                <Icon type='close'/>
            </div>
            <div className="GoLogin-main">
                <div className="Login-logo">
                        <h1>一条</h1>
                </div>
                <div className="GoLogin-title">
                    <h2 className='title1'>优质生活媒体</h2>
                    <h2 className='title2'>生活美学电商</h2>
                </div>
                <div className="GoLogin-img">
                    <img src="https://asset.yit.com/h5/image/login_bg_201705040630.jpg" style={{width:"100%"}} alt=""/>
                </div>
                <div className="GoLogin-but" onClick={()=>{
                    this.props.history.push('/personal/login')
                }}>
                    手机号登录
                </div>
            </div>


           </div>
    }

}

export default connect()(Gologin)