import axios from './index'

//登录
export function login(payload) {
    return axios.post('/personal/login',payload)
}
//注册
export function register(payload) {
    return axios.post('/personal/register',payload)
}
//验证是否登录
export function checkLogin() {
    return axios.get('/personal/login')
}
//获取个人信息
export function userInfo() {
    return axios.get("/personal/info")
}
//退出登录
export  function out() {
    return axios.get("/personal/out")
}
