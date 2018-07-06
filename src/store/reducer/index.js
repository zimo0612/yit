import {combineReducers} from 'redux';
import shopCarts from './shopCarts';
import personal from './personal';
import category from './category'

let reducer = combineReducers({
    shopCarts,
    personal,
    category
});
export default reducer;