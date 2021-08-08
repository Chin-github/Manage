import axios from "axios";
import {
    Message
} from 'element-ui';
import{getToken} from '@/utils/auth'
const service = axios.create({
    baseURL: "localhost:8080",
    timeout: 5000
})
//请求拦截
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(getToken()){
        config.headers.token=getToken()
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

//响应拦截
service.interceptors.response.use(response => {
    const res = response.data
    if (!res.success) {
        Message({
            message: res.message || "请求错误",
            type: 'error'
        })
        return Promise.reject(new Error(res.message || "请求错误"))
    } else {
        return res
    }

}, error => {
    Message({
        message: error.message,
        type: 'error'
    })
    return Promise.resolve(new Error(error))
})


export default service