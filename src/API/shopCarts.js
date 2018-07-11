import axios from "./index";

//验证是否登录
export function checkLogin() {
    return axios.get('/personal/login')
}

//加入购物车
export function addShopCart(productID,amount) {
    return axios.post('/store/add', {
        productID,
        amount
    });
}

//从购物车移除
export function removeShopCart(productID) {
    return axios.post('/store/remove', {
        productID
    });
}

//修改购物车数量信息
export function editShopCart(productID,amount) {
    return axios.post('/store/edit',{
        productID,
        amount
    })
}

//从服务器获取最新的购物车信息
export function queryShopCartInfo(state) {
    return axios.get('/store/info', {
        params: {
            state
        }
    });
}

//支付商品
export function payShopCartItems(id) {
    return axios.post('./store/pay',{
        storeID:JSON.stringify(id)
    })
}

//获取推荐
export function salesCart(typeId) {
    return axios.get('/product/filterProduct', {
        params: {
            typeId
        }
    });
}


