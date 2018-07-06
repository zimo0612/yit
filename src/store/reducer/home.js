import * as TYPES from '../action-types';

let INIT_STATE = {
    topCategory: [],
    bannerData:[],
    product:[],
    filterProductData:[]
};
export default function home(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.HOME_QUERY_TOPCATEGORY:
            let {result: {code, data}} = action;
            if (parseFloat(code) === 0) {
                state.topCategory = data;
            }
            break;

        case TYPES.HOME_QUERY_BANNER:
            let {banner} = action;
            if (parseFloat(banner.code) === 0) {
                state.bannerData = banner.data;
            }
            break;

        case TYPES.HOME_QUERY_KILLPRODUCT:
            let {result}=action;
            if (parseFloat(result.code)===0){
                state.product=result.data;
            }
            break;
        case TYPES.HOME_QUERY_FILTERPRODUCT:
            let {filterProductData}=action;
            if (parseFloat(filterProductData.code)===0){
                state.filterProductData=filterProductData.data
            }
            break;


    }

    return state;
};