import Vue from 'vue'
import { axiosInstance as axios } from './axios'

const $api = {
  /* get请求 */
  getTest: (params = {}) => axios.get('/api/test', { params }),
  /* post请求 */
  postTest: (params = {}) => axios.post('/api/test', params)
}

Vue.prototype.$api = $api

// import { $api } from 'boot/api' 去使用
export { $api }
