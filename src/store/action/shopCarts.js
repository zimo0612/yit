import * as TYPES from '../action-types';
import {queryShopCart} from '../../API/shopCarts'

let shopCarts = {
    queryUnpay() {
        return async dispatch => {
            let result = queryShopCart(0);
            dispatch({
                type: TYPES.SHOP_CART_UNPAY,
                result
            })
        }
    },
    queryPay() {
        return async dispatch => {
            let result = queryShopCart(1);
            dispatch({
                type: TYPES.SHOP_CART_PAY,
                result
            })
        }
    }
};
export default shopCarts;