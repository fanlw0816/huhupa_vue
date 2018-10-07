import axios from 'axios'
import router from '~/router'
import store from '~/store'

export function createAxios (baseURL) {
  const axiosObj = axios.create({
    baseURL: baseURL, // api基础url
    timeout: 30 * 1000 // 超时时间
  })

  axiosObj.defaults.headers.common['Accept'] = 'applition/json'
  axiosObj.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  axiosObj.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 拦截请求
  // axiosObj.interceptors.request.use(
  //   config => {
  //     if (store.state.currentUser.token) {
  //       // 判断是否存在token，如果存在的话，则每个http header都加上token
  //       config.headers.Authorization = `JWT ${store.state.userInfo.token}`
  //     }
  //     return config
  //   },
  //   error => {
  //     return Promise.reject(error)
  //   }
  // )

  // 拦截响应
  axiosObj.interceptors.response.use(
    response => {
      return response
    },
    error => {
      let res = error.response
      switch (res.status) {
        case 401:
          console.log('未登录 或者token过期')
          store.commit(types.LOGOUT)
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
        case 403:
          console.log('您没有该操作权限')
        case 500:
          console.log('服务器错误')
      }
      return Promise.reject(error.response.data)
    }
  )

  return axiosObj
}
