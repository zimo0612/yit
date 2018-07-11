import * as TYPES from '../action-types';
import {userInfo,out,checkLogin} from '../../API/personal';
let personal = {
    queryUserInfo() {
        console.log(1);
        return async dispatch => {
            let result = await userInfo();
            dispatch({
                type: TYPES.USER_QUERY_INFO,
                result,
            })
        }
    },
    checkLogin(){
        console.log("login");
        return async dispatch=>{
            let result = await checkLogin();
            console.log(2.333);
            dispatch({
                type:TYPES.USER_CHECK_LOGIN,
                result
            })
        }
    },
    userLogOut(){
        return async dispatch=>{
            let result = await out();
            dispatch({
                type:TYPES.USER_OUT,
                result
            })
        }
    }
};
export default personal;