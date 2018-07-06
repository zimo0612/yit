import axios from './index'

/*获取类别*/
export function topCategory() {
    return axios.get('/category/homeTopCategory')
}

/*获取banner*/
export function queryBanner() {
    return axios.get('/banner/homeBanner')
}

/*获取限时购*/

export function killProduct() {
    return axios.get('/product/killProduct')
}

/*获取今日上新*/
export function filterProduct(payload) {
    return axios.get('/product/filterProduct',{
        params:payload
    })
}
