import * as TYPES from '../action-types';

let INIT_STATE = {
    queryData: null,
    productAry:[]

};
export default function shopCarts(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {

        //获取推荐新信息
        case TYPES.QUERY_SHOP_CART:
            if (parseFloat(action.result.code) === 0) {
                state.queryData = action.result.data
            }
            break;
        case TYPES.ADD_SHOP:
            let {productID,amount}=action;
             state.productAry.push({
                 productID,
                 amount,
             });
             break;



    }

    return state;
};