import axios from './index'

//获取分类页信息
export function queryMidCategory(){
    return axios.get('/category/midCategory')
}

//根据子类别获取商品列表（分类路由下）
export function querySubTypeProduct(subTypeId) {
    return axios.get('/product/subTypeProduct',{
        params:{subTypeId}
    })
}