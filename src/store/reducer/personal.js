import * as TYPES from '../action-types';

let INIT_STATE = {
    baseInfo: null
};
export default function personal(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {

        case TYPES.QUERY_USER_INFO:
            if (parseFloat(action.result.code)===0){
                state.baseInfo=action.result.data;
            }
            break;


    }

    return state;
};