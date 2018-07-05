import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


import Null from './ShopCart/Null'
import Have from './ShopCart/Have'

import Recommend from '../component/Recommend'
import '../static/css/shopCart.less';

import {Switch, Redirect, Route} from 'react-router-dom';
class ShopCart extends React.Component {
    constructor(props,context) {
        super(props,context)
    }

    render() {
        return <div className={"ShopCartBox"}>
            <Switch>
                <Route path='/shopcart/null' component={Null}/>
                <Route path='/shopcart/have' component={Have}/>
                <Redirect from={"/shopcart"} to={'/shopcart/null'}/>
            </Switch>
            <Recommend/>
        </div>
    }
}
export default withRouter(connect()(ShopCart));