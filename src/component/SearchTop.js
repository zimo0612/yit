import React from 'react';
import {connect} from 'react-redux';
import {Input} from 'antd';

const Search = Input.Search;
class SearchTop extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='iptTopBox clearfix'>
            <Search
                placeholder="搜索一万件好东西"
                onSearch={value => console.log(value)}
                style={{height:32}}
            />
        </div>
    }
}

export default connect()(SearchTop);