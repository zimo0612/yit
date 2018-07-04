import React from 'react';
import {connect} from 'react-redux';
import SearchTop from '../component/SearchTop'

class Home extends React.Component {
    constructor(props,context){
        super(props,context);
    }

    render(){
        return <section>
            <SearchTop/>
            <div className="homeBox">
                首页
            </div>
        </section>
    }
}

export default connect()(Home);