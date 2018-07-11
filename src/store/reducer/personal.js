import * as TYPES from '../action-types';

let INIT_STATE = {
    baseInfo: null,
    isLogin: false
};
export default function personal(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        //=>获取用户信息
        case TYPES.USER_QUERY_INFO:
            if (parseFloat(action.result.code) === 0) {
                state.baseInfo = action.result.data;
                state.isLogin = true;
            }
            break;
        case TYPES.USER_CHECK_LOGIN:
            console.log(3);
            if (parseFloat(action.result.code) === 0) {
                console.log(4);
                state.isLogin = true;
            }
            break;
        case TYPES.USER_OUT:
            if (parseFloat(action.result.code) === 0) {
                state.isLogin = false;
                state.baseInfo = null;
            }
            break;
    }
    return state;
};