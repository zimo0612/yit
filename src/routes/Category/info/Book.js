import React from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom'
import action from '../../../store/action/index';
import Qs from 'qs';


class Book extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    commonFn = (nextProps) => {
        let {id = 1} = Qs.parse(nextProps.location.search.substr(1)) || {};
        let {classData} = this.props;
        let obj = classData.find((item, index) => {
            return parseFloat(item.id) === parseFloat(id);
        });
        this.subTypes = obj.subTypes;
    };

    componentWillReceiveProps(nextProps) {
        this.commonFn(nextProps);
    }

    componentWillMount(){
        this.commonFn(this.props);
    }
   /* handleClick=index=>{
        let {SubTypeProduct}=this.props;
        SubTypeProduct(index);
    };*/

    render() {
        let {subTypes = []} = this;
        return <div className='CategoryBook'>
            <div className='BookTitle'>
                <img src="https://asset.yit.com/FRONTENT_CATEGORY_IMG/6fe9367e7a8a790bd4395452db496284_520X240.jpeg"
                     alt=""/>
            </div>
            {subTypes.map((item, index) => {
                return <div className="BookContent" key={index}>
                    <h3><span>— </span>{item.title}<span> —</span></h3>
                    <ul>
                        {
                            item.item.map((ite,ind)=>{
                                return <Link to={`/category/list?id=${ite.id}`} key={ind}>
                                    <li>
                                        <img
                                            src={ite.pic}
                                            alt=""/>
                                        <p>{ite.desc}</p>
                                    </li>
                                </Link>
                            })
                        }
                    </ul>
                </div>;
            })}
        </div>
    }
}

export default withRouter(connect(state => state.category, action.category)(Book));