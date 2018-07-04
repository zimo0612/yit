import React from 'react';
import {connect} from 'react-redux';

import {Row, Col, Carousel} from 'antd';
import '../static/css/Home.less'
import {Switch, Link, Route, NavLink} from 'react-router-dom'
import Today from './Home/Today'
import Tomorrow from './Home/Tomorrow'
import AfterTomorrow from './Home/AfterTomorrow'

import SearchTop from '../component/SearchTop'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={'HomeBox'}>
            <SearchTop/>
            <Row className={'cmsEight'}>
                <Col span={6}>
                    <a href="">
                        <img
                            src="http://imgcms.yit.com/cmsres/20180515/5d9269af-d936-46f8-8037-3e137a8933b5_200X200.png"
                            alt=""/></a>
                    <div>家电数码</div>
                </Col>
                <Col span={6}>
                    <a href="">
                        <img
                            src="http://imgcms.yit.com/cmsres/20180515/02e3ddaf-94cc-49b1-9a3a-bfd77fede91d_200X200.png"
                            alt=""/></a>
                    <div>美妆洗护</div>
                </Col>
                <Col span={6}>
                    <a href="">
                        <img
                            src="http://imgcms.yit.com/cmsres/20180515/605e355c-c82b-49f0-8b04-91085ddb5d0a_200X200.png"
                            alt=""/></a>
                    <div>美食厨房</div>
                </Col>
                <Col span={6}>
                    <a href="">
                        <img
                            src="http://imgcms.yit.com/cmsres/20180515/5a148a0b-1d57-463a-bd35-3ff642e34c41_200X200.png"
                            alt=""/></a>
                    <div>服饰珠宝</div>
                </Col>
                <Col span={6}>
                    <a href="">
                        <img
                            src="http://imgcms.yit.com/cmsres/20180515/65f2720c-024c-4ad1-bb6c-018088b039aa_200X200.png"
                            alt=""/></a>
                    <div>居家日用</div>
                </Col>
                <Col span={6}>
                    <a href="">
                        <img
                            src="http://imgcms.yit.com/cmsres/20180515/1c72bc97-e732-42bf-928e-280412743b62_200X200.png"
                            alt=""/></a>
                    <div>图书文创</div>
                </Col>
                <Col span={6}>
                    <a href="">
                        <img
                            src="http://imgcms.yit.com/cmsres/20180615/dd5187e8-44ce-4506-b752-c5bf4fd2d05d_120X120.png"
                            alt=""/></a>
                    <div>精选专题</div>
                </Col>
                <Col span={6}>
                    <a href="">
                        <img
                            src="http://imgcms.yit.com/cmsres/20180515/c30ca126-0ebc-4a91-9ad6-080ec0e4e844_200X200.png"
                            alt=""/></a>
                    <div>VIP会员</div>
                </Col>


            </Row>
            <Carousel autoplay className={'banner'}>
                <div className={'slide'}>
                    <a href=""><img
                        src="http://imgcms.yit.com/cmsres/20180702/a620afe6-4fda-430e-9661-08e3a96d84e6_750X420.jpeg?imageView2/0/w/750"
                        alt=""/></a>
                </div>
                <div className={'slide'}>
                    <a href=""><img
                        src="http://imgcms.yit.com/cmsres/20180701/8fb48e45-3db9-4427-ae54-946e9d52ddb6_750X420.jpeg?imageView2/0/w/750"
                        alt=""/></a>
                </div>
                <div className={'slide'}>
                    <a href=""><img
                        src="http://imgcms.yit.com/cmsres/20180702/02f4b952-81bb-42ad-a234-0c5221497f29_750X420.jpeg?imageView2/0/w/750"
                        alt=""/></a>
                </div>
                <div className={'slide'}>
                    <a href=""><img
                        src="http://imgcms.yit.com/cmsres/20180701/2415d6a0-4a4c-42d7-9e0c-f7980aa0f449_750X420.jpeg?imageView2/0/w/750"
                        alt=""/></a>
                </div>
                <div className={'slide'}>
                    <a href=""><img
                        src="http://imgcms.yit.com/cmsres/20180702/31e24ace-83df-4863-b053-7d2e9cd55988_750X420.jpeg?imageView2/0/w/750"
                        alt=""/></a>
                </div>
            </Carousel>
            <div className={'cms-banner'}>
                <a href=""><img
                    src="http://imgcms.yit.com/cmsres/20180702/020d99b1-8b61-4faa-bf8e-4047382720d2_750X182.jpeg?imageView2/2/w/750"
                    alt=""/>
                </a>
            </div>
            <div className="banner-container">
                <img
                    src="http://imgcms.yit.com/cmsres/20180605/b5d54385-6af5-47c9-8ff7-17432a167d51_690X250.jpeg?imageView2/0/w/690"
                    alt=""/>
            </div>
            <div className={'limit'} style={{paddingBottom: '.2rem'}}>
                <div className={'limitTitle'}>
                    <h3>限时购</h3>
                    <p>每日早10点开抢</p>
                </div>
                <Row className='limitTime'>
                    <Col span={8}>
                        <NavLink to={'/Home'} exact activeClassName={'active'}><span>7月3日 10:00</span>
                            <div><span>已经开抢</span></div>
                        </NavLink>
                    </Col>
                    <Col span={8}><NavLink to={'/Home/tomorrow'} activeClassName={'active'}><span>7月3日 10:00</span>
                        <div><span>已经开抢</span></div>
                    </NavLink></Col>
                    <Col span={8} className={'limitTime-l'} activeClassName={'active'}><NavLink
                        to={'/Home/AfterTomorrow'}><span>7月3日 10:00</span>
                        <div><span>已经开抢</span></div>
                    </NavLink></Col>
                </Row>
                <Switch>
                    <Route path={'/Home'} exact component={Today}></Route>
                    <Route path={'/Home/tomorrow'} component={Tomorrow}></Route>
                    <Route path={'/Home/AfterTomorrow'} component={AfterTomorrow}></Route>

                </Switch>
            </div>
            <div className={'todayNew'}>
                <div className="newTitle">
                    今日上新
                </div>
                <div className="item">
                    <div className={'prdItem'}>
                        <a href="">
                            <img
                                src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                                alt=""/>
                            <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                            <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                            <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                            <div className={'tagBox'}><span>前30件再减200元</span></div>
                        </a>
                    </div>
                    <div className={'prdItem'}>
                        <a href="">
                            <img
                                src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                                alt=""/>
                            <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                            <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                            <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                            <div className={'tagBox'}><span>前30件再减200元</span></div>
                        </a>
                    </div>
                    <div className={'prdItem'}>
                        <a href="">
                            <img
                                src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                                alt=""/>
                            <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                            <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                            <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                            <div className={'tagBox'}><span>前30件再减200元</span></div>
                        </a>
                    </div>
                    <div className={'prdItem'}>
                        <a href="">
                            <img
                                src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                                alt=""/>
                            <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                            <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                            <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                            <div className={'tagBox'}><span>前30件再减200元</span></div>
                        </a>
                    </div>
                    <div className={'prdItem'}>
                        <a href="">
                            <img
                                src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                                alt=""/>
                            <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                            <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                            <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                            <div className={'tagBox'}><span>前30件再减200元</span></div>
                        </a>
                    </div>
                    <div className={'prdItem'}>
                        <a href="">
                            <img
                                src="http://img01.yit.com/media/d069105d-f21c-46c4-8473-6a45dff8df5c.jpg?imageView2/0/w/265"
                                alt=""/>
                            <div className={'ellipsis'}>乾隆册封的梅菜烧饼</div>
                            <div className={'price'}><span>¥1080</span><span>¥1280</span></div>
                            <div className={'VIP-price'}><span>会员价</span><span>¥1026</span></div>
                            <div className={'tagBox'}><span>前30件再减200元</span></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={'activity'}>
                <div className={'activityTitle'}>
                    活动精选
                </div>
                <div className={'main clearfix'}>
                    <ul className={'clearfix'}>
                        <li>
                            <a href="">
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
                            <a href="">
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
                            <a href="">
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
                            <a href="">
                                <div className={'container'}>
                                    <div>限时特惠</div>
                                    <div>大家都在买</div>
                                </div>
                                <img
                                    src="http://imgcms.yit.com/cmsres/20180515/85b0d297-4bc6-4b34-9358-3e2185a68dbe_200X200.png?imageView2/0/w/140"
                                    alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'hot'}>
                <div className="hotTitle">
                    热销榜单
                </div>
                <div className="hotMain">
                    <ul className={'clearfix'}>
                        <li>
                        <a href="">
                            <div className={'container'}>
                                <div>限时特惠</div>
                                <div>大家都在买</div>
                            </div>
                            <img
                                src="http://imgcms.yit.com/cmsres/20180515/8e14ece8-7f07-4001-819d-0cae56dd2196_200X200.png?imageView2/0/w/140"
                                alt=""/>
                        </a>
                    </li>
                        <li>
                            <a href="">
                                <div className={'container'}>
                                    <div>限时特惠</div>
                                    <div>大家都在买</div>
                                </div>
                                <img
                                    src="http://imgcms.yit.com/cmsres/20180515/8e14ece8-7f07-4001-819d-0cae56dd2196_200X200.png?imageView2/0/w/140"
                                    alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className={'container'}>
                                    <div>限时特惠</div>
                                    <div>大家都在买</div>
                                </div>
                                <img
                                    src="http://imgcms.yit.com/cmsres/20180515/8e14ece8-7f07-4001-819d-0cae56dd2196_200X200.png?imageView2/0/w/140"
                                    alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className={'container'}>
                                    <div>限时特惠</div>
                                    <div>大家都在买</div>
                                </div>
                                <img
                                    src="http://imgcms.yit.com/cmsres/20180515/8e14ece8-7f07-4001-819d-0cae56dd2196_200X200.png?imageView2/0/w/140"
                                    alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className={'container'}>
                                    <div>限时特惠</div>
                                    <div>大家都在买</div>
                                </div>
                                <img
                                    src="http://imgcms.yit.com/cmsres/20180515/8e14ece8-7f07-4001-819d-0cae56dd2196_200X200.png?imageView2/0/w/140"
                                    alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className={'container'}>
                                    <div>限时特惠</div>
                                    <div>大家都在买</div>
                                </div>
                                <img
                                    src="http://imgcms.yit.com/cmsres/20180515/8e14ece8-7f07-4001-819d-0cae56dd2196_200X200.png?imageView2/0/w/140"
                                    alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={'commodity'}>
                <div className={'commodityTitle'}>
                    为你推荐
                </div>
                <div className={'container'}>
                    <a href="" className={'detail'}>
                        <img src="http://img01.yit.com/media/94efec00-ee75-499e-bb1a-4dda0dd0003a.jpg?imageView2/0/w/360" alt=""/>
                        <div className={'title'}>
                            <p>自开启防滴漏油壶</p>
                            <span>倾倒平稳，抬手即停，2种颜色可选，不滴不漏，清洁方便，无油渍残留</span>
                        </div>
                        <div className={'price'}>
                            ¥58
                        </div>
                        <div className={'VIP-price'}>
                            <span>会员价</span>
                            <span>¥55.1</span>
                        </div>

                    </a>
                    <a href="" className={'detail'}>
                        <img src="http://img01.yit.com/media/94efec00-ee75-499e-bb1a-4dda0dd0003a.jpg?imageView2/0/w/360" alt=""/>
                        <div className={'title'}>
                            <p>自开启防滴漏油壶</p>
                            <span>倾倒平稳，抬手即停，2种颜色可选，不滴不漏，清洁方便，无油渍残留</span>
                        </div>
                        <div className={'price'}>
                            ¥58
                        </div>
                        <div className={'VIP-price'}>
                            <span>会员价</span>
                            <span>¥55.1</span>
                        </div>

                    </a>
                    <a href="" className={'detail'}>
                        <img src="http://img01.yit.com/media/94efec00-ee75-499e-bb1a-4dda0dd0003a.jpg?imageView2/0/w/360" alt=""/>
                        <div className={'title'}>
                            <p>自开启防滴漏油壶</p>
                            <span>倾倒平稳，抬手即停，2种颜色可选，不滴不漏，清洁方便，无油渍残留</span>
                        </div>
                        <div className={'price'}>
                            ¥58
                        </div>
                        <div className={'VIP-price'}>
                            <span>会员价</span>
                            <span>¥55.1</span>
                        </div>

                    </a>
                    <a href="" className={'detail'}>
                        <img src="http://img01.yit.com/media/94efec00-ee75-499e-bb1a-4dda0dd0003a.jpg?imageView2/0/w/360" alt=""/>
                        <div className={'title'}>
                            <p>自开启防滴漏油壶</p>
                            <span>倾倒平稳，抬手即停，2种颜色可选，不滴不漏，清洁方便，无油渍残留</span>
                        </div>
                        <div className={'price'}>
                            ¥58
                        </div>
                        <div className={'VIP-price'}>
                            <span>会员价</span>
                            <span>¥55.1</span>
                        </div>

                    </a>
                    <a href="" className={'detail'}>
                        <img src="http://img01.yit.com/media/94efec00-ee75-499e-bb1a-4dda0dd0003a.jpg?imageView2/0/w/360" alt=""/>
                        <div className={'title'}>
                            <p>自开启防滴漏油壶</p>
                            <span>倾倒平稳，抬手即停，2种颜色可选，不滴不漏，清洁方便，无油渍残留</span>
                        </div>
                        <div className={'price'}>
                            ¥58
                        </div>
                        <div className={'VIP-price'}>
                            <span>会员价</span>
                            <span>¥55.1</span>
                        </div>

                    </a>
                    <a href="" className={'detail'}>
                        <img src="http://img01.yit.com/media/94efec00-ee75-499e-bb1a-4dda0dd0003a.jpg?imageView2/0/w/360" alt=""/>
                        <div className={'title'}>
                            <p>自开启防滴漏油壶</p>
                            <span>倾倒平稳，抬手即停，2种颜色可选，不滴不漏，清洁方便，无油渍残留</span>
                        </div>
                        <div className={'price'}>
                            ¥58
                        </div>
                        <div className={'VIP-price'}>
                            <span>会员价</span>
                            <span>¥55.1</span>
                        </div>

                    </a>

                </div>

            </div>

        </div>

    }
}

export default connect()(Home);
