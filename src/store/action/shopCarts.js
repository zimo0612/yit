import * as TYPES from '../action-types';
import {shopCart} from '../../API/shopCarts'

let shopCarts = {
    queryShopCart(state) {
        return async dispatch => {
            let result = await shopCart(state);
            dispatch({
                type: TYPES.QUERY_SHOP_CART,
                result,
            })
        }
    },
    addShop(state){
        return{
            type:TYPES.ADD_SHOP,

        }
    }
};
export default shopCarts;