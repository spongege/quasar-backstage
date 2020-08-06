// axios启动文件(src/boot/axios.js)

import Vue from 'vue'
import axios from 'axios'

const baseURL = process.env.PROD ? 'http://prod' : 'http://test'

const timeout = 15 * 1000

const axiosInstance = axios.create({
  baseURL,
  timeout
})

/* 请求拦截器 */
axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/* 响应拦截器 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = axiosInstance

// import { axiosInstance } from 'boot/axios' 去使用
export { axiosInstance }
