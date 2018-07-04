import axios from "./index";

/** 全部分类页 */
export const allCategoryData = () => {
    return axios.get('/goods/allCategory')
}

/** 首页轮播 */
export const getBannerData = () => {
    return axios.get('/goods/banner')
}

/** 商品详情 */
export const getInfo = payload => {
    let {
        category,
        id
    } = payload;
    return axios.get(`/goods/info/${category}/${id}`)
}

/** 获取分类数据 */
export const queryCategory = payload => {
    let {id,sort = 0} = payload;
    return axios.get(`/goods/category/${id}/${sort}`)
}

/** 闲逛 */
export const queryRandom = () => {
    return axios.get('/goods/random')
}

/** 搜索 */
export const search = ref => {
    return axios.post('/goods/search',{
        ref
    })
}