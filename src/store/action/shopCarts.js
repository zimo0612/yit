import * as TYPES from '../action-types';
import {queryShopCartInfo,addShopCart,editShopCart,removeShopCart,payShopCartItems,salesCart} from '../../API/shopCarts'

let shopCarts = {
    queryShopCartInfo(state) {
        return async dispatch => {
            let result = await queryShopCartInfo(state);
            dispatch({
                type: TYPES.SHOP_CART_INFO,
                result,
            })
        }
    },
    editShopCartData(id,amount){
        return async dispatch=>{
            let result = await editShopCart(id,amount);
            dispatch({
                type:TYPES.SHOP_CART_EDIT,
                result,
                id,
                amount
            })
        }
    },
    addShopCartData(id,amount,item){
        return async dispatch=>{
            let result = await addShopCart(id,amount);
            dispatch({
                type:TYPES.SHOP_CART_ADD,
                result,
                item,
                amount
            })
        }
    },
    removeShopCartData(id){
        return async dispatch=>{
            let result = await removeShopCart(id);
            dispatch({
                type:TYPES.SHOP_CART_REMOVE,
                result,
                id
            })
        }
    },
    payShopCartItems(id){
        return async dispatch=> {
            let result = await payShopCartItems(id);
            dispatch({
                type: TYPES.SHOP_CART_PAY,
                result,
                id
            })
        }
    },
    queryRecommendData(typeId){
        return async dispatch=>{
            let result = await salesCart(typeId);
            dispatch({
                type:TYPES.QUERY_RECOMMEND_DATA,
                result
            })
        }
    }
};
export default shopCarts;