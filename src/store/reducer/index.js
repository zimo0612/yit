import {combineReducers} from 'redux';
import shopCarts from './shopCarts';
import personal from './personal';

let reducer = combineReducers({
    shopCarts,
    personal
});
export default reducer;