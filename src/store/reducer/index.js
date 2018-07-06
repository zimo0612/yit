import {combineReducers} from 'redux';
import shopCarts from './shopCarts';
import personal from './personal';
import home from './home'

let reducer = combineReducers({
    shopCarts,
    personal,
    home
});
export default reducer;