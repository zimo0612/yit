import React from 'react';
import {connect} from 'react-redux';
import Book from "./info/Book";
import {Switch,Route,Redirect,NavLink,Link,withRouter} from 'react-router-dom'
import action from '../../store/action'
import Qs from 'qs'


class Info extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            tempIndex:parseFloat(Qs.parse(this.props.location.search.substr(1)).id)
        }
    }

    componentWillMount(){
        let id=this.props.location.search?parseFloat(Qs.parse(this.props.location.search.substr(1)).id):1;
        this.setState({
            tempIndex:id,
        })
    }

    componentWillReceiveProps(nextProps){
        let id=nextProps.location.search?parseFloat(Qs.parse(nextProps.location.search.substr(1)).id):1;
        this.setState({
            tempIndex:id,
        })
    };


    render(){
        let {classData} = this.props;
        if (!classData) return "";
        return <div className='infoBox clearfix'>
            <div className='NavLeft'>
                <ul>
                    {classData.map((item, index) => {
                        return <li key={index} className={index===this.state.tempIndex-1?"active":""} onClick={this.handleClick.bind(this,index)}><Link to={`/category/info?id=${item.id}`}>{item.title}</Link></li>
                    })}
                </ul>
            </div>
            <div className="NavRight">
                <Switch>
                    <Route path='/category/info' component={Book}/>
                    <Redirect to='/category/info'/>
                </Switch>
            </div>
        </div>
    }
    handleClick=(index)=>{
        this.setState({
            tempIndex:index
        })
    }
}
export default connect(state=>state.category,action.category)(Info);