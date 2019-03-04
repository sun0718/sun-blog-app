import axios from "axios"
import qs from "qs"

var config = require('../config')

const baseURL = config.host.baseURL


console.log(baseURL)
var servers = axios.create();

// 添加请求拦截器
servers.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 显示loading
    const token = localStorage.getItem('token')
    const uid = localStorage.getItem('uid')

    config.url = `${baseURL}${config['url']}`
    console.log(config.url)
    if(config.method === 'POST' || config.method === 'PUT'){
        let data = qs.parse(config.data)
        config.data = qs.stringify({
            token:token,
            uid:uid,
            ...data
        })
    }else if(config.method === 'GET' || config.method === 'DELETE'){
        config.params = {
            token:token,
            uid:uid,
            ...config.params
        }
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    // 错误提示弹窗
    return Promise.reject(error);
  });

// 数据返回失败的提示函数
function errorState(response){
    // 隐藏loading
    // 状态码正常返回数据
    if(response && response.status === 200 || response.status === 304 || response.status === 400){
        return response.data
    }else{
        alert('数据获取失败')
    }
}

// 数据返回成功的提示函数
function successState(response){
    // 隐藏loading
    // 状态码正常返回数据
    if(response.data.code === '000000'){
        return response.data
        alert('success')
    }
}

function apiAxios (method,url,params) {
    let httpDefault = {
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        method: method,
        // baseURL: baseURL,
        url:url,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
        timeout: 10000,
        // 是否携带cookie信息
        withCredentials: false, // default
    }

    return new Promise((resolve,reject)=>{
        servers(httpDefault).then((res)=>{
            successState(res)
            resolve(res)
        }).catch((err)=>{
            errorState(err)
            reject(err)
        })
    })
}

export default {
    install:function(Vue){
        Vue.prototype.$get = (url ,params) => apiAxios('GET',url ,params)
        Vue.prototype.$post = (url ,params) => apiAxios('POST',url ,params)
        Vue.prototype.$put = (url ,params) => apiAxios('PUT',url ,params)
        Vue.prototype.$delete = (url ,params) => apiAxios('DELETE',url ,params)
    }
}
