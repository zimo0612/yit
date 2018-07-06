import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


import Null from './ShopCart/Null'
import Have from './ShopCart/Have'

import Recommend from '../component/Recommend'
import '../static/css/shopCart.less';

import {Switch, Redirect, Route} from 'react-router-dom';
import action from "../store/action";

import {shopCart} from '../API/shopCarts'

class ShopCart extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        let {queryData, queryShopCart} = this.props;
        if (!queryData) {
             queryShopCart(0);
        }
    }

    render() {
        if (!this.props.queryData) return "";
        //data 没有请求到数据

        return <div className={"ShopCartBox"}>
            <Switch>
                <Route path='/shopcart'/>
            </Switch>
            {this.props.queryData.length !== 0 ? <Null/> : <Have/>}
            <Recommend/>
        </div>
    }
}

export default withRouter(connect(state => ({...state.shopCarts}), action.shopCarts)(ShopCart));