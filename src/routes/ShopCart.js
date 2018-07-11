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
        this.state={
            count:0
        }
    }

    async componentWillMount() {
        if(!this.props.isLogin){
            let result = await checkLogin();
            if(parseFloat(result.code)!==0){
                this.props.history.push('/gologin');
            }
        }
        let {shopCartData, queryShopCartInfo} = this.props;
        if (shopCartData.length===0) {
            if(this.state.count===0){
                queryShopCartInfo(0);
                this.setState({
                    count:1
                });
            }
        }
    }

    componentWillReceiveProps(nextProps,nextState){
        let {shopCartData, queryShopCartInfo} = nextProps;
        if (shopCartData.length===0) {
            if(this.state.count===0){
                queryShopCartInfo(0);
                this.setState({
                    count:1
                });
            }
        }
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

export default withRouter(connect(state => ({...state.shopCarts,...state.personal}), action.shopCarts)(ShopCart));