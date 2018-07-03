import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';

class Personal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            <Button>登录</Button>
        </div>
    }
}

export default connect()(Personal);