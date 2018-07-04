import React from 'react';
import {connect} from 'react-redux';
import SearchTop from '../component/SearchTop';

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <section>
            <SearchTop/>
            <div className="categoryBox">
                分类
            </div>
        </section>
    }
}

export default connect()(Category);