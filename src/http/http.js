import axios from 'axios'
import { Loading, Message } from 'element-ui'

// 服务器地址
// const SERVER_ADDRESS = 'http://10.10.8.38/CurtainCustomizationAPI_TEST/CurtainCustomization/'
const SERVER_ADDRESS = 'http://10.10.9.79/cl.webapi/CurtainCustomization/'
// const SERVER_ADDRESS = 'http://10.10.9.79/chuanglianApi_test/CurtainCustomization/'

// 配置请求信息
let config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
// loading 配置
let loadingOptions = {
  lock: false,
  text: 'Loading',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.7)'
}

export function get (url, params) {
  // 打开loading
  let loadingInstance = Loading.service(loadingOptions)
  config['params'] = params
  return new Promise((resolve, reject) => {
    axios.get(SERVER_ADDRESS + url, config).then(res => {
      // 关闭loading
      loadingInstance.close()
      if (res.data.Status == '0') {
        resolve(res.data)
      } else if(res.data.Status == '1') {
        showMsg(res.data.Message, 'error')
      } else {
        showMsg('系统异常,请稍后重试', 'error')
      }
    }).catch(error => {
      // 关闭loading
      loadingInstance.close()
      if (error.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        let msg = "状态码:" + error.response.status + ',' + '错误提示:' + error.response.data
        showMsg(msg, 'error')
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
        let msg = '错误提示:' + error.message
        showMsg(msg, 'error')
      }
    })
  })
}

export function post (url, params) {
  // 打开loading
  let loadingInstance = Loading.service(loadingOptions)
  // let headers = {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // }
  return new Promise((resolve, reject) => {
    axios.post(SERVER_ADDRESS + url, params).then(json => {
      // 关闭loading
      loadingInstance.close()
      if (json.data.Status == '0') {
        resolve(json.data)
      } else if (json.data.Status == '1') {
        showMsg(json.data.Message, 'error')

      } else {
        showMsg('系统异常,请稍后重试', 'error')
      }
      // resolve(json.data)
    }).catch (error => {
      // 关闭loading
      loadingInstance.close()
      if (error.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        let msg = "状态码:" + error.response.status + ',' + '错误提示:' + error.response.data
        showMsg(msg, 'error')
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
        let msg = '错误提示:' + error.message
        showMsg(msg, 'error')
      }
    })
  })
}
//  消息提示配置
export function showMsg (msg, type) {
  let messageOptions = {
    message: msg, // 提示信息
    type: type, // 提示类型 success/warning/info/error
    duration: 3000 // 提示信息显示时间
  }
  Message(messageOptions)
}
