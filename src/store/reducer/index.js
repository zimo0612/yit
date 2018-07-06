import {combineReducers} from 'redux';
import shopCarts from './shopCarts';
import personal from './personal';
import home from './home'
import category from './category'

let reducer = combineReducers({
    shopCarts,
    personal,
    home,
    category
});
export default reducer;