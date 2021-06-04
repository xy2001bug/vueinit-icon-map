import Axios from 'axios'
const $http = Axios.create()
$http.defaults.baseURL = ''
// if (process.env.NODE_ENV === 'development') {
//     $http.defaults.baseURL = 'http://api.lgsfudev.com'
// } else {
//     $http.defaults.baseURL = 'https://mapi.lgsfu.com'
// }
if (process.env.NODE_ENV) {
    $http.defaults.baseURL = process.env.VUE_APP_HOST
}
// 添加请求拦截器
$http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.token = ''
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
$http.interceptors.response.use(function (response) {
// 对响应数据做点什么
    if (response.data) {
        // dosomething
    }
    return response
}, function (error) {
// 对响应错误做点什么
    if (error && error.response) {
        switch (error.response.status) {
        case 400:
            error.message = '错误请求'
            break
        case 500:
            error.message = '服务端出错'
            break
        default:
            error.message = `连接错误${error.response.status}`
        }
    } else {
        error.message = '网络出现问题，请稍后再试'
    }
    return Promise.resolve(error)
})
// export default $http
export function httpPost (url, data = {}) {
    return new Promise((resolve, reject) => {
        $http.post(url, data).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}
export function httpGet (url, data = {}) {
    return new Promise((resolve, reject) => {
        if (data.url) {
            url = url + data.url
            data = {}
        }
        $http.get(url, {
            params: data
        }).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}
