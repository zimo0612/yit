import React from 'react'
import {connect} from 'react-redux'
import {Icon,Tabs} from 'antd'
import Recommend from '../../component/Recommend'
import SearchTop from "../../component/SearchTop"
const TabPane = Tabs.TabPane;
class OderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }


    render() {
        return <div>
            <SearchTop/>
            <Tabs defaultActiveKey="1">
                <TabPane tab="全部" key="1">
                    <div className={'wuBox'}>
                        <Icon type="calendar"  className={'icon'}/>
                        <div>
                    <span className={'mt20'} style={{marginLeft:".3rem"}}>
                        您暂时还没有订单哦！
                    </span>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="待付款" key="2"> <div className={'wuBox'}>
                    <Icon type="calendar"  className={'icon'}/>
                    <div>
                    <span className={'mt20'} style={{marginLeft:".3rem"}}>
                        您暂时还没有订单哦！
                    </span>
                    </div>
                </div></TabPane>
                <TabPane tab="待发货" key="3"> <div className={'wuBox'}>
                    <Icon type="calendar"  className={'icon'}/>
                    <div>
                    <span className={'mt20'} style={{marginLeft:".3rem"}}>
                        您暂时还没有订单哦！
                    </span>
                    </div>
                </div></TabPane>
                <TabPane tab="待收货" key="4"> <div className={'wuBox'}>
                    <Icon type="calendar"  className={'icon'}/>
                    <div>
                    <span className={'mt20'} style={{marginLeft:".3rem"}}>
                        您暂时还没有订单哦！
                    </span>
                    </div>
                </div></TabPane>
            </Tabs>

            <Recommend/>
        </div>

    }

}

export default connect()(OderList)