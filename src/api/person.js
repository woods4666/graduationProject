import axios from "./index";

export const register = (payload) => {
    return axios.post('/user/register',payload)
}

export const login = payload => {
    return axios.post('/user/login',payload)
}

export const checkout = () => {
    return axios.get('/user/checkout')
}

export const modify = payload => {
    return axios.get('/user/modify',payload)
}

export const checkLog = () => {
    return axios.get('/user/check')
}
export const queryInfo=()=>{
    return axios.get('/user/info')
}