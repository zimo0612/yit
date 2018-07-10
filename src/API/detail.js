import axios from './index';

//=>根据id获取商品详情
export function queryProductData(id) {
    return axios.get(`/product/productInfo?id=${id}`);
}

