import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {checkLogin} from '../API/personal'


import Null from './ShopCart/Null'
import Have from './ShopCart/Have'

import Recommend from '../component/Recommend'
import '../static/css/shopCart.less';

import {Switch, Redirect, Route} from 'react-router-dom';
import action from "../store/action";

import {shopCart} from '../API/shopCarts'
import Gologin from "./Gologin";

class ShopCart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            isLogin:false
        }
    }

    async componentWillMount() {
        let {queryData, queryShopCart} = this.props;
        if (!queryData) {
             queryShopCart(0);
        }
        this. result = await checkLogin();
           let isLogin= this.result.code===0?true:false
          this.setState({
              isLogin,
          });
    }


    render() {
        if (!this.result)return "" ;
        if (!this.props.queryData) return "";
        //data 没有请求到数据

        return <div className={"ShopCartBox"}>
            <Switch>
                <Route path='/shopcart' render={()=>{
                    if (this.state.isLogin){
                        if (this.props.queryData.length === 0 ){
                            return <Null/>
                        }else {
                            return <Have/>
                        }
                    } else {
                       return <Gologin/>
                    }

                }}/>
            </Switch>

        </div>
    }
}

export default withRouter(connect(state => ({...state.shopCarts}), action.shopCarts)(ShopCart));