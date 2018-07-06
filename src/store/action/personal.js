import * as TYPES from '../action-types';
import {userInfo,out} from '../../API/personal';


let personal = {
    queryUserInfo() {
        return async dispatch => {
            let result = await userInfo();
            dispatch({
                type: TYPES.QUERY_USER_INFO,
                result,
            })
        }
    }
};

export default personal;