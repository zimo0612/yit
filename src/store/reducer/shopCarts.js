import * as TYPES from '../action-types';

let INIT_STATE = {
    shopCartData: []
};
export default function shopCarts(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        //获取购物车信息
        case TYPES.SHOP_CART_INFO:
            if (parseFloat(action.result.code) === 0) {
                state.shopCartData = action.result.data
            }
            break;
        case TYPES.SHOP_CART_EDIT:
            if (parseFloat(action.result.code) === 0) {
                state.shopCartData.forEach(item => {
                    if (item.item.id === action.id) {
                        item.amount = action.amount;
                    }
                })
            }
            break;
        case TYPES.SHOP_CART_ADD:
            if (parseFloat(action.result.code) === 0) {
                state.shopCartData.push({
                    item: action.item,
                    amount: action.amount
                });
            }
            break;
        case TYPES.SHOP_CART_REMOVE:
            if (parseFloat(action.result.code) === 0) {
                state.shopCartData = state.shopCartData.filter(item => {
                    return item.item.id !== action.id;
                });
            }
            break;
        case TYPES.SHOP_CART_PAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCartData = state.shopCartData.map(item => {
                    if(item.item.id===action.id){
                        item.item.state=1
                    }
                    return item;
                })
            }
    }
    return state;
};