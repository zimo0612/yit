import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route,Redirect} from 'react-router-dom'

import '../static/css/Category.less'
import '../static/css/reset.min.css'

import action from '../store/action'

import Info from './Category/info'
import List from './Category/list'

import SearchTop from '../component/SearchTop';


class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        let {classData, queryMidCategory} = this.props;
        if (!classData) {
            queryMidCategory();
        }
    }

    render() {
        return <section>
            <SearchTop/>
            <div className="categoryBox">
                <Switch>
                    <Route path='/category/info' component={Info}/>
                    <Route path='/category/list' component={List}/>
                    <Redirect from='/category' to='/category/info'/>
                </Switch>
            </div>
        </section>
    }
}

export default connect(state => state.category, action.category)(Category);