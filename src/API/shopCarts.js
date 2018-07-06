import axios from "./index";

//验证是否登录
export function checkLogin() {
    return axios.get('/personal/login')
}

//加入购物车
export function addShopCart(courseID) {
    return axios.post('/store/add', {
        courseID
    });
}

//从购物车移除
export function removeShopCart(courseID) {
    return axios.post('/store/remove', {
        courseID
    });
}

//从服务器获取最新的购物车信息
export function shopCart(state) {
    return axios.get('/store/info', {
        params: {
            state
        }
    });
}

//获取推荐
export function salesCart(typeId) {
    return axios.get('/product/filterProduct', {
        params: {
            typeId: 1
        }
    });
}
