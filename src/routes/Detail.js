import React from 'react'
import {connect} from 'react-redux'
import '../static/css/Detail.less'
import {Switch, Link, Route, NavLink,Redirect} from 'react-router-dom'
import {Icon,Row,Col} from 'antd'
import Home from './Home'
import ShopCart from './ShopCart'
import Buy from './Detail/Buy'
import Info from './Detail/Info'

 class Detail extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div className={'DetailBox'}>


            <Switch>
                <Route path={'/detail/info'} exact component={Info}/>
                <Redirect from={'/detail'} to={'detail/info'}/>

            </Switch>

        </div>
    }
}

export default connect()(Detail);