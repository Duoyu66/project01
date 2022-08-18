//对axios二次封装
import axios from "axios"
//利用axios方法创建一个axios实例
const service = axios.create({
    baseURL:"/mock",
    timeout:5000
})
//请求拦截器
service.interceptors.request.use((config)=>{
    return config;
})
//响应拦截器
service.interceptors.response.use((res)=>{
    return res.data;
},(error)=>{
    // console.log("响应失败"+error)
    return Promise.reject(new Error('failed'))
})
export default service