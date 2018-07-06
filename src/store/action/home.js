import * as TYPES from '../action-types';
import {topCategory, queryBanner, killProduct, filterProduct} from "../../API/home";

let home = {
    queryTopCategory() {
        return async dispatch => {
            let result = await topCategory();
            dispatch({
                type: TYPES.HOME_QUERY_TOPCATEGORY,
                result,
            })
        }
    },

    queryHomeBanner() {
        return async dispatch => {
            let banner = await queryBanner();
            dispatch({
                type: TYPES.HOME_QUERY_BANNER,
                banner
            })
        }
    },

    queryKillProduct() {
        return async dispatch => {
            let result = await killProduct();
            dispatch({
                type: TYPES.HOME_QUERY_KILLPRODUCT,
                result,
            })
        }
    },
    queryFilterProduct(payload={}) {
        let {typeId=1}=payload;
        return async dispatch => {
            let filterProductData = await filterProduct(payload);
            dispatch({
                type: TYPES.HOME_QUERY_FILTERPRODUCT,
                filterProductData
            });
        };

    }

};

export default home;