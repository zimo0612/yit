import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import {Icon} from 'antd';

class NavBottom extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <footer className='footerNavBox'>
            <NavLink to='/home'>
                <Icon type='home'/>
                <span>首页</span>
            </NavLink>
            <NavLink to='/category'>
                <Icon type='bars'/>
                <span>分类</span>
            </NavLink>
            <NavLink to='/shopcart'>
                <Icon type='shopping-cart'/>
                <span>购物车</span>
            </NavLink>
            <NavLink to='/personal'>
                <Icon type='user'/>
                <span>我的</span>
            </NavLink>
        </footer>;
    }
}

export default withRouter(connect()(NavBottom));