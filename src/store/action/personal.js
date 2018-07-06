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
<<<<<<< HEAD
    }
};
=======
    },
>>>>>>> 7eaadffbdfa394dc6d08fd46c9071c33a99f572b

};

export default personal;