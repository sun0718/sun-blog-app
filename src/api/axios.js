import Vue from 'vue'
import axios from "axios"
import Router from "vue-router";

var config = require('../config')

const baseURL = config.host.baseURL

console.log(baseURL)

var httpServers = axios.create();

// 添加请求拦截器
httpServers.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 显示loading
  const token = sessionStorage.getItem('SUN_WEB_TOKEN')
  config.url = `${baseURL}${config['url']}`

  if (token) {
    // Bearer是JWT的认证头部信息
    config.headers.common['Authorization'] = 'Bearer ' + token
  }
  return config;
}, function (err) {
  // 对请求错误做些什么
  // 错误提示弹窗
  return Promise.reject(err);
});
// 添加返回拦截器
httpServers.interceptors.response.use(
  response => {
    let data = response.data
    // 状态等于'0000'
    if (data.code == '0000') {
      return Promise.resolve(data)
    } else if(data.code == '0001'){  // 状态等于'0001'
      Vue.prototype.$message({
        type: 'error',
        message: data.msg
      })
      return Promise.reject(data)
    }
  },
  //请求错误
  err => {
    let msg = ''
    console.log('status:',err.response.status)
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          msg = '错误请求'
          break
        case 401:
          msg = '未授权或登录超时，请重新登录'
          break
        case 403:
          msg = '拒绝访问'
          break
        case 404:
          msg = '请求错误,未找到该资源'
          break
        case 405:
          msg = '请求方法未允许'
          break
        case 408:
          msg = '请求超时'
          break
        case 500:
          msg = '服务器端出错'
          break
        case 501:
          msg = '网络未实现'
          break
        case 502:
          msg = '网络错误'
          break
        case 503:
          msg = '服务不可用'
          break
        case 504:
          msg = '网络超时'
          break
        case 505:
          msg = 'http版本不支持该请求'
          break
        default:
          msg = `连接错误${err.response.status}`
      }
    } else {
        msg = '连接到服务器失败'
    }
    
    Vue.prototype.$message({
      type: 'error',
      message: msg
    })
    if(err.response.status == 401){
      Vue.$router.push('/login')
    }
    
    return Promise.reject(err.response)
  })

function apiAxios(method, url, params, config) {
  let httpDefault = Object.assign({
    headers: { 'X-Requested-With': 'XMLHttpRequest'},
    method: method,
    url: url,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    data: method === 'POST' || method === 'PUT' ? params : null,
    timeout: 10000,
    // 是否携带cookie信息
    withCredentials: false, // default
  },config)
  return httpServers(httpDefault)
}

export default {
  install: function (Vue) {
    Vue.prototype.$get = (url, params, config) => apiAxios('GET', url, params, config)
    Vue.prototype.$post = (url, params, config) => apiAxios('POST', url, params, config)
    Vue.prototype.$put = (url, params, config) => apiAxios('PUT', url, params, config)
    Vue.prototype.$delete = (url, params, config) => apiAxios('DELETE', url, params, config)
  }
}