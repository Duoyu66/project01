//对axios二次封装
import axios from "axios"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({showSpinner: false})
//利用axios方法创建一个axios实例
const service = axios.create({
    baseURL:"/api",
    timeout:5000
})
//请求拦截器
service.interceptors.request.use((config)=>{
    if (store.store.state.detail.uuid_token){
        config.headers['userTempId']=store.state.detail.uuid_token
    }
    NProgress.start();
    return config;
})
//响应拦截器
service.interceptors.response.use((res)=>{
    NProgress.done();
    return res.data;
},()=>{
    console.log("响应失败")
})
export default service