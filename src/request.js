import axios from 'axios';
import {Message, Loading} from 'element-ui'


let loading = null //定义loading变量

//开始 加载loading
let startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.8)'
  })
}
//结束 取消loading加载
let endLoading = () => {
  loading.close()
}
let needLoadingRequestCount = 0
let showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

let tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}


let severUrl = process.env.NODE_ENV === 'production' ? process.env.API_HOST : '/api';
axios.defaults.timeout = 6000;
axios.defaults.baseURL = severUrl;
// http request 拦截
axios.interceptors.request.use(
  config => {
    config.data.openid=localStorage.getItem('opid')
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// http response 拦截

axios.interceptors.response.use(
  response => {
    const res = response;
    return res;
  }, error => {
    return Promise.reject(error);
  }
)

// post 请求
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}