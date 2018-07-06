import * as TYPES from '../action-types'


export default function category(state = {
    classData: null,
    subTypes: [],
    subTypeProduct:[]
}, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.CATEGORY_CLASS:
            let {code, data} = action.payload;
            if (parseFloat(code) === 0) {
                state.classData = data;
            }
            break;

        case TYPES.CATEGORY_SUB_TYPE_PRODUCT:
            if (parseFloat(action.result.code) === 0){
                state.subTypeProduct.push({
                    data:action.result.data,
                    subTypeId:action.subTypeId
                })
            }
           break;


    }
    return state;
}