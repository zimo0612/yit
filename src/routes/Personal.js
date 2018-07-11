import React from 'react'
import {connect} from 'react-redux'
import {Switch, Redirect, Route} from 'react-router-dom'
import Tip from "./Personal/Tip";
import "../static/css/Personal.less"
import Info from "./Personal/Info";
// import {checkLogin} from "../API/personal"
import Login from "./Personal/Login";
import Register from "./Personal/Register";
import Person_Center from "./Personal/Person_Center";
import '../static/font/iconfont.css'
import OderList from "./Personal/OderList";
import action from '../store/action';

class Personal extends React.Component {
    constructor(props, context) {
        super(props, context);
        /*this.state = {
            isLogin: false
        }*/
    }

    componentWillMount(){
        if(!this.props.isLogin){
            this.props.checkLogin();
        }
    }
    componentWillReceiveProps(nextProps,nextState) {
        if(!nextProps.isLogin){
            this.props.checkLogin();
        }
    }
    render() {
        return <section>
            <Switch>
                <Route path='/personal/info' render={() => {
                    if (this.props.isLogin) {
                        return <Info/>
                    }
                    return <Tip/>
                }}/>
                <Route path='/personal/login' component={Login}/>
                <Route path='/personal/register' component={Register}/>
                <Route path='/personal/center' component={Person_Center}/>
                <Route path='/personal/orderlist' component={OderList}/>
                <Redirect from='/personal' to='/personal/info'/>
            </Switch>
        </section>
    }
}

export default connect(state=>({...state.personal}),action.personal)(Personal);