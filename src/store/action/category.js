import * as TYPES from '../action-types'
import {queryMidCategory,querySubTypeProduct} from '../../API/category'

let category={
    queryMidCategory(){
        return{
            type:TYPES.CATEGORY_CLASS,
            payload:queryMidCategory()
        }
    },
    SubTypeProduct(subTypeId){
        return async dispatch=>{
            let result=await querySubTypeProduct(subTypeId);
            dispatch({
                type:TYPES.CATEGORY_SUB_TYPE_PRODUCT,
                result,
                subTypeId
            })

        }
    },

};
export default category;