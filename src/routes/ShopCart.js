import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {checkLogin} from '../API/personal'


import Null from './ShopCart/Null'
import Have from './ShopCart/Have'

import Recommend from '../component/Recommend'
import '../static/css/shopCart.less';

import {Switch, Route} from 'react-router-dom';
import action from "../store/action";
import Gologin from "./Gologin";

class ShopCart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLogin: false
        }
    }

    async componentWillMount() {
        let {shopCartData, queryShopCartInfo} = this.props;
        if (!shopCartData) {
            queryShopCartInfo(0);
        }
        let result = await checkLogin();
        let isLogin = result.code === 0 ? true : false;
        this.setState({
            isLogin,
        });
    }


    render() {
        return  <div className={"ShopCartBox"}>
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