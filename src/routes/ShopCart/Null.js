import React from 'react';
import {connect} from 'react-redux'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'

import NavBottom from '../../component/NavBottom'

class Null extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div>
            <div className={'wuBox'}>
                <Icon type="shopping-cart"  className={'icon'}/>
                <div>
                    <span className={'mt20'}>
                        这里有全球一万件好东西
                        <Link to={'/home'}>去挑选</Link>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default connect()(Null);