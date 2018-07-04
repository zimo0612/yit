import React from 'react'
import {connect} from 'react-redux'
import {Switch,Redirect,Route} from 'react-router-dom'
import Tip from "./Personal/Tip";
import "../static/css/Personal.less"
import Info from "./Personal/Info";
import {checkLogin} from "../API/personal"
import Login from "./Personal/Login";
import Register from "./Personal/Register";
import Person_Center from "./Personal/Person_Center";
import {Icon} from 'antd'
import '../static/font/iconfont.css'

class Personal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            isLogin:false
        }
    }

   async componentWillReceiveProps(){
            let result = await checkLogin(),
                isLogin = parseFloat(result.code) === 0 ? true : false;
            this.setState({isLogin})

    }

    render() {
        return <section>
            <Switch>
                <Route path='/personal/info' render={()=>{
                     if (this.state.isLogin){
                        return   <Info/>
                     }
                     return   <Tip/>
                }}/>
                <Route path='/personal/login' component={Login}/>
                <Route path='/personal/register' component={Register}/>
                <Route path='/personal/center' component={Person_Center}/>
                <Redirect from='/personal' to='/personal/info'/>
            </Switch>


        </section>
    }
}

export default connect()(Personal);