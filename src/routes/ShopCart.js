import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


import Null from './ShopCart/Null'
import Have from './ShopCart/Have'

import Recommend from '../component/Recommend'
import '../static/css/shopCart.less';

import {Switch, Route} from 'react-router-dom';
import action from "../store/action";

class ShopCart extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={"ShopCartBox"}>
            <Switch>
                <Route path='/shopcart' render={()=>{
                    return this.props.shopCartData.length === 0 ? <Null/> : <Have/>
                }}/>
            </Switch>
            <Recommend/>
        </div>
    }
}

export default withRouter(connect(state => ({...state.shopCarts}), action.shopCarts)(ShopCart));