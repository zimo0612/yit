import React from 'react';
import {connect} from 'react-redux';

import {Row, Col, Carousel} from 'antd';
import '../static/css/Home.less'
import {Switch, Link, Route, NavLink,Redirect} from 'react-router-dom'
import Info from './Home/Info'
import Today from './Home/Info/Today'
import Tomorrow from './Home/Info/Tomorrow'
import AfterTomorrow from './Home/Info/AfterTomorrow'
import SearchTop from '../component/SearchTop'
import CheckMore from './Home/CheckMore'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={'HomeBox'}>
            <Switch>
                <Route path={'/home/info'}  component={Info}></Route>
                <Route path={'/home/checkmore'} component={CheckMore}></Route>
                <Redirect from={'/home'} to={'/home/info'}></Redirect>
            </Switch>

        </div>

    }
}

export default connect()(Home);
