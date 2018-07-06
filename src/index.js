/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

/*REDUX STORE*/
import {Provider} from 'react-redux';
import store from './store/index';

/*ANTD*/
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*IMPORT CSS*/
import './static/css/reset.min.css';
import './static/css/common.less';

/*IMPORT COMPONENT*/
import Home from './routes/Home';
import Personal from './routes/Personal';
import Category from './routes/Category';
import ShopCart from './routes/ShopCart';
import NavBottom from './component/NavBottom';
import SearchTop from './component/SearchTop';


ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                {/*SEARCH*/}
                <SearchTop/>

                {/*MAIN=>ROUTE*/}
                <main className='container'>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/category' component={Category}/>
                        <Route path='/personal' component={Personal}/>
                        <Route path='/shopcart' component={ShopCart}/>
                        <Redirect to='/home'/>
                    </Switch>
                </main>

                {/*FOOTER*/}
                <NavBottom/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>,root);

