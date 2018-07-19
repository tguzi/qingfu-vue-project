/**
 * http请求配置
 */
import axios  from 'axios'
import qs     from 'qs'
// 超时时间
axios.defaults.timeout = 5000
// 设置基本的请求路径
axios.defaults.baseURL = '/local'
// 设置默认请求拦截器
axios.interceptors.request.use(function (config) {
  // 在请求发出之前进行一些操作
  config.data = qs.stringify(config.data)
  return config
}, function (err) {
  // 请求拦截器出错
  return Promise.reject(err)
})
// 设置默认响应拦截器
axios.interceptors.response.use(function (res) {
  // 在这里对返回的数据进行处理
  if (res.data.code === 200) {
    return res
  }
  else {
    // 响应拦截器提示返回状态异常
    return Promise.reject(res)
  }
}, function (err) {
  // 响应拦截器出错
  return Promise.reject(err)
})
export default axios
