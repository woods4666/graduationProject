import axios from "./index";

export const add = payload => {
    return axios.post('/shopcart/add',payload)
};

export const remove = payload => {
    return axios.post('/shopcart/remove',payload)
};

export const pay = payload => {
    return axios.post('/shopcart/pay',payload)
};

export const query = () => {
    return axios.get('/shopcart/query')
};