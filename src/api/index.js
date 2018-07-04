import axios from 'axios';
import Qs from 'qs';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true; //允许跨域（并且允许携带cookie）
axios.defaults.transformRequest = (data = {}) => Qs.stringify(data);
//=> 把post / put请求主体传递给服务器的内容统一处理为 x-www-url-encode格式

axios.interceptors.response.use(result => result.data);
//响应拦截器，把服务器返回的信息中响应主体内容拦截返回，以后再then中获取的结果就是主体内容

export default axios;