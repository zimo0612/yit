import * as TYPES from '../action-types';

let INIT_STATE = {
    baseInfo: null,
    shopCarts:{
        unpay:[],
        pay:[]
    }
};
export default function shopCarts(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {

    }
    return state;
};