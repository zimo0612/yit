import React from 'react';
import {connect} from 'react-redux';

class Personal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            PERSONAL
        </div>
    }
}

export default connect()(Personal);