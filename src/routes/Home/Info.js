import React from 'react'
import {connect} from 'react-redux'
import {Row, Col, Carousel} from 'antd';
import {Switch, Link, Route, NavLink} from 'react-router-dom'
import AfterTomorrow from "./Info/AfterTomorrow";
import Today from "./Info/Today";
import Tomorrow from "./Info/Tomorrow";
import SearchTop from '../../component/SearchTop'
import action from '../../store/action'


class Info extends React.Component {
    constructor(props, context) {
        super(props, context);


    }

    componentWillMount() {
        let {
            topCategory, queryTopCategory,
            bannerData, queryHomeBanner,
            queryKillProduct, product,
            queryFilterProduct, filterProductData,
        } = this.props;
        if (topCategory.length === 0) {
            queryTopCategory();
        }
        if (bannerData.length === 0) {
            queryHomeBanner();
        }
        if (product.length === 0) {
            queryKillProduct();
        }
        if (filterProductData.length === 0) {
            queryFilterProduct({typeId: 1});
        }

    }


    render() {

        let {topCategory, bannerData, filterProductData} = this.props;
        let s = filterProductData.slice(0);
        s.sort((a, b) => {
            return a.id - b.id;
        });
        if (topCategory.length === 0&&bannerData.length === 0&&filterProductData.length === 0) return '';



        return <div className={'infoBox'}>

            <SearchTop/>
            {/*上分类*/}
            <Row className={'cmsEight'}>

                {topCategory.map((item, index) => {
                    let {id,pic, title, desc} = item;
                    return <Col span={6} key={index}>
                        <Link to={`/category/info/?id=${id}`}>
                            <img
                                src={pic}
                                alt={desc}/></Link>
                        <div>{title}</div>
                    </Col>
                })}

                <Col span={6}>
                    <a href="javascript:;">
                        <img
                            src="http://imgcms.yit.com/cmsres/20180615/dd5187e8-44ce-4506-b752-c5bf4fd2d05d_120X120.png"
                            alt=""/></a>
                    <div>精选专题</div>
                </Col>
                <Col span={6}>
                    <a href="javascript:;">
                        <img
                            src="http://imgcms.yit.com/cmsres/20180515/c30ca126-0ebc-4a91-9ad6-080ec0e4e844_200X200.png"
                            alt=""/></a>
                    <div>VIP会员</div>
                </Col>


            </Row>
            {/*home banner*/}
            <Carousel autoplay className={'banner'}>
                {bannerData.map((item, index) => {
                    let {pic,id} = item;
                    return <div className={'slide'} key={index}>
                        <Link to={`/category/info/?id=${id}`}><img
                            src={pic}
                            alt=""/></Link>
                    </div>
                })}
            </Carousel>
            {/*广告*/}
            <div className={'cms-banner'}>
                <a href="javascript:;"><img
                    src="http://imgcms.yit.com/cmsres/20180702/020d99b1-8b61-4faa-bf8e-4047382720d2_750X182.jpeg?imageView2/2/w/750"
                    alt=""/>
                </a>
            </div>
            <div className="banner-container">
                <img
                    src="http://imgcms.yit.com/cmsres/20180605/b5d54385-6af5-47c9-8ff7-17432a167d51_690X250.jpeg?imageView2/0/w/690"
                    alt=""/>
            </div>
            {/*限时购*/}
            <div className={'limit'} style={{paddingBottom: '.2rem'}}>
                <div className={'limitTitle'}>
                    <h3>限时购</h3>
                    <p>每日早10点开抢</p>
                </div>
                <Row className='limitTime'>
                    <Col span={8}>
                        <NavLink to={'/home/info'} exact><span>7月3日 10:00</span>
                            <div><span>已经开抢</span></div>
                        </NavLink>
                    </Col>
                    <Col span={8}><NavLink to={'/home/info/tomorrow'} activeClassName={'active'}><span>7月3日 10:00</span>
                        <div><span>已经开抢</span></div>
                    </NavLink></Col>
                    <Col span={8} style={{border: 'none'}}>
                        <NavLink
                        to={{
                            pathname:'/home/info/aftertomorrow'
                        }} activeClassName={'active'}><span>7月3日 10:00</span>
                        <div><span>已经开抢</span></div>
                    </NavLink></Col>
                </Row>

                <Switch>
                    <Route path={'/home/info'} exact component={Today}></Route>
                    <Route path={'/home/info/tomorrow'} component={Tomorrow}></Route>
                    <Route path={'/home/info/aftertomorrow'} component={AfterTomorrow}></Route>

                </Switch>
            </div>
            {/*今日上新*/}
            <div className={'todayNew'}>
                <div className="newTitle">
                    今日上新
                </div>
                <div className="item">
                    {filterProductData.slice(0, 24).map((item, index) => {
                        let {desc, title, pic, id, price, currentPrice, vPrice} = item;
                        if (index % 4 === 0) {
                            return <div className={'prdItem'} key={index}>
                                <Link to={`/detail/?id=${id}`}>
                                    <img
                                        src={pic}
                                        alt=""/>
                                    <div className={'ellipsis'}>{title}</div>
                                    <div className={'price'}><span>¥{price}</span><span>¥{currentPrice}</span></div>
                                    <div className={'VIP-price'}><span>会员价</span><span>¥{vPrice}</span></div>
                                    <div className={'tagBox'}><span>前30件再减200元</span></div>
                                </Link>
                            </div>
                        }

                    })}
                </div>
            </div>
            {/*活动精选*/}
            <div className={'activity'}>
                <div className={'activityTitle'}>
                    活动精选
                </div>
                <div className={'main clearfix'}>
                    <ul className={'clearfix'}>
                        <li>
                            <a href="javascript:;">
                                <div className={'container'}>
                                    <div>限时特惠</div>
                                    <div>大家都在买</div>
                                </div>
                                <img
                                    src="http://imgcms.yit.com/cmsres/20180515/85b0d297-4bc6-4b34-9358-3e2185a68dbe_200X200.png?imageView2/0/w/140"
                                    alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div className={'container'}>
                                    <div>小编推荐</div>
                                    <div>爱用物分享</div>
                                </div>
                                <img
                                    src="http://imgcms.yit.com/cmsres/20180515/d9e2338b-dc76-4921-935c-1abdba61398c_200X200.png?imageView2/0/w/140"
                                    alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div className={'container'}>
                                    <div>日用清单</div>
                                    <div>贴心实用</div>
                                </div>
                                <img
                                    src="http://imgcms.yit.com/cmsres/20180705/0e5989ca-313d-4a17-b12e-e07ad1437589_200X200.png?imageView2/0/w/140"
                                    alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div className={'container'}>
                                    <div>母婴亲子</div>
                                    <div>辣妈养娃必备</div>
                                </div>
                                <img
                                    src="http://imgcms.yit.com/cmsres/20180629/8382096d-fc81-4a79-a898-297d33aa1c52_120X120.png?imageView2/0/w/140"
                                    alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/*热销榜单*/}
            <div className={'hot'}>
                <div className="hotTitle">
                    热销榜单
                </div>
                <div className="hotMain">
                    <ul className={'clearfix'}>
                        <Row>


                        {topCategory.map((item, index) => {
                            let {pic, title, desc,id} = item;
                            return <Col span={12}>
                                <li key={index}>
                                <Link to={{
                                    pathname:'/category/info',
                                    search:`?id=${id}`
                                }}>
                                    <div className={'container'}>
                                        <div>{title}榜</div>
                                        <div>{desc}</div>
                                    </div>
                                    <img
                                        src={pic}
                                        alt=""/>
                                </Link>
                            </li></Col>
                        })}
                        </Row>
                    </ul>
                </div>

            </div>
            {/*为你推荐*/}
            <div className={'commodity'}>
                <div className={'commodityTitle'}>
                    为你推荐
                </div>
                <div className={'container'}>
                    {
                        s.map((item, index) => {
                            let {id, desc, pic, title, vPrice, price} = item;
                            return <Link to={`/detail?id=${id}`} className={'detail'} key={index}>
                                <img
                                    src={pic}
                                    alt=""/>
                                <div className={'title'}>
                                    <p>{title}</p>
                                    <span>{desc}</span>
                                </div>
                                <div className={'price'}>
                                    ¥{price}
                                </div>
                                <div className={'VIP-price'}>
                                    <span>会员价</span>
                                    <span>¥{vPrice}</span>
                                </div>

                            </Link>
                        })}


                </div>

            </div>

        </div>
    }
}

export default connect(state => ({...state.home}), action.home)(Info);