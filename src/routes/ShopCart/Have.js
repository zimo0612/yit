import React from 'react';
import {Icon, Modal, Checkbox, Button} from 'antd';
import {connect} from 'react-redux';
import action from "../../store/action";

class Have extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemList: [],
            checkAll: false,
            total: 0,
            visible:false,
            confirmLoading: false,
        };

    }

    componentWillMount() {
        if (this.props.shopCartData.length !== 0) {
            this.props.shopCartData.reverse();
            this.props.shopCartData.forEach((item, index) => {
                this.state.itemList.push({
                    id: item.item.id,
                    amount: item.amount,
                    price: item.item.price,
                    isCheck: false
                });
            })
        }
    }

    render() {
        if (this.props.shopCartData.length === 0) return '';
        return <div className={'allCartList'}>
            <ul className={'list'}>
                {
                    this.props.shopCartData.map((item, index) => {
                        let {pic, desc, title, price, id} = item.item;
                        return <li key={index} ref={`item${index + 1}`}>
                            <span className={'left'}>
                               <Checkbox
                                   checked={this.state.itemList[index] ? this.state.itemList[index].isCheck : false}
                                   onChange={ev => {
                                       let total = 0;
                                       this.state.itemList.forEach(item => {
                                           if (item.id === id) {
                                               total += ev.target.checked ? parseFloat(item.amount) * parseFloat(item.price) : 0;
                                               return;
                                           }
                                           total += item.isCheck ? parseFloat(item.amount) * parseFloat(item.price) : 0;
                                       });
                                       this.setState({
                                           itemList: this.state.itemList.map(item => {
                                               if (item.id === id) {
                                                   item.isCheck = ev.target.checked;
                                               }
                                               return item;
                                           }),
                                           checkAll: this.state.itemList.every(item => item.isCheck === true),
                                           total
                                       });
                                   }}/>
                            </span>
                            <div className={'right'}>
                                <img src={pic} alt={desc}/>
                                <div className={'title'}>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                    <span>￥{price}</span>
                                    <div className={'icon'}>
                                        <Icon type="minus-circle-o" className={'tl'} onClick={() => {
                                            this.minus(id);
                                        }}/>
                                        <h4>{this.state.itemList[index] ? this.state.itemList[index].amount : 1}</h4>
                                        <Icon type="plus-circle-o" className={'tz'} onClick={() => {
                                            this.addition(id);
                                        }}/>
                                        <Icon type="close" className={'tr'} onClick={() => {
                                            this.showDeleteConfirm(id);
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
            <div className={'Hot'}>
                {/*<div className={'top'}>
                    <i/>
                    <p>成为VIP,本单可省<span>00.00元</span></p>
                    <a className={'span'}>查看详情></a>
                </div>*/}
                <div className={'bottom'}>
                <span className={'I'}>
                     <Checkbox checked={this.state.checkAll} onChange={ev => {
                         this.setState({
                             checkAll: ev.target.checked
                         });
                         //=>setState是异步的
                         if (ev.target.checked) {
                             let total = 0;
                             this.state.itemList.forEach(item => {
                                 total += parseFloat(item.price) * parseFloat(item.amount);
                             });
                             this.setState({
                                 itemList: this.state.itemList.map(item => {
                                     item.isCheck = true;
                                     return item;
                                 }),
                                 total
                             });
                             return;
                         }
                         this.setState({
                             itemList: this.state.itemList.map(item => {
                                 item.isCheck = false;
                                 return item;
                             }),
                             total: 0
                         });
                     }}/>
                </span>
                    <a href="javascript:;">全部选择</a>
                    <p>合计:￥<span>{this.state.total}</span></p>
                    <Button type="danger" className={'sp'} onClick={this.showModal}>结算</Button>
                    <Modal title="提示"
                           visible={this.state.visible}
                           onOk={this.handleOk}
                           confirmLoading={this.state.confirmLoading}
                           onCancel={this.handleCancel}
                    >
                        <p>客官要结算了吗？</p>
                    </Modal>
                </div>
            </div>
            {/*<Bottom ref='stand'/>*/}
        </div>
    }

    //=>显示结算框
    showModal = ev=> {
        this.ids = [];
        this.state.itemList.forEach(item=>{
            if(item.isCheck){
                this.ids.push(item.id);
            }
        });
        if(this.ids.length===0)return;
        this.setState({
            visible: true,
        });
    };

    //=>关闭结算框
    handleCancel = ev => {
        this.setState({
            visible: false,
        });
    };

    //=>确认结算
    handleOk = () => {
        this.props.payShopCartItems(this.ids);
        setTimeout(() => {
            this.props.queryShopCartInfo(0);
            this.setState({
                visible: false,
                confirmLoading: false,
                itemList:this.state.itemList.filter(item=>{
                    return item.isCheck===false;
                }),
                total:0
            });
        }, 500);
    };



    //减少商品数量按钮
    minus = id => {
        let {editShopCartData} = this.props;
        let total = 0;
        this.state.itemList.forEach(item => {
            if (item.id === id && item.amount > 1) {
                total += item.isCheck ? parseFloat(item.amount - 1) * parseFloat(item.price) : 0;
                return;
            }
            total += item.isCheck ? parseFloat(item.amount) * parseFloat(item.price) : 0;
        });
        let newItemList = this.state.itemList.map(item => {
            if (item.id === id) {
                if (item.amount >= 2) {
                    item.amount -= 1;
                    editShopCartData(id, item.amount);
                }
            }
            return item;
        });
        this.setState({
            itemList: newItemList,
            total
        });
    };

    //=>增加商品数量按钮
    addition = id => {
        let {editShopCartData} = this.props;
        let total = 0;
        this.state.itemList.forEach(item => {
            if (item.id === id) {
                total += item.isCheck ? parseFloat(item.amount + 1) * parseFloat(item.price) : 0;
                return;
            }
            total += item.isCheck ? parseFloat(item.amount) * parseFloat(item.price) : 0;
        });
        let newItemList = this.state.itemList.map(item => {
            if (item.id === id) {
                item.amount += 1;
                editShopCartData(id, item.amount);
            }
            return item;
        });
        this.setState({
            itemList: newItemList,
            total
        })
    };

    //=>确认删除商品弹框
    showDeleteConfirm = id => {
        let {shopCartData, removeShopCartData} = this.props;
        let _this = this;
        Modal.confirm({
            content: '你确定要删除该商品',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                removeShopCartData(id);
                if (_this.refs[`item${id}`]) {
                    _this.refs[`item${id}`].style.display = 'none';
                }
                let newItemList = _this.state.itemList.filter(item => item.id !== id);
                let total = 0;
                newItemList.forEach(item => {
                    total += item.isCheck ? parseFloat(item.price) * parseFloat(item.amount) : 0;
                });
                _this.setState({
                    itemList: newItemList,
                    total
                })
            },
            onCancel() {
                /*取消做什么*/
            },
        });
    }
}

export default connect(state => ({...state.shopCarts}), action.shopCarts)(Have)