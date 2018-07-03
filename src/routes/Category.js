import React from 'react';
import {connect} from 'react-redux';

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            CATEGORY
        </div>
    }
}

export default connect()(Category);