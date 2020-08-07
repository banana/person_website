import * as http from '../http/http'

export function getData () {
  return http.get('../../static/json.json')
}
// 首页获取staffnoID
export function getStaffID (params) {
  return http.get('GetParameter', params)
}
// 新增页面获取单号
export function getOrder (params) {
  return http.get('GetRequestNo', params)
}
// 新增保存
export function addSave (params) {
  return http.post('NewAndUpdateData', params)
}
// 新增窗帘保存
export function addCurtain (params) {
  return http.post('NewAndUpdateDataDetail', params)
}
// 获取商品 JAN
export function getJAN (params) {
  return http.get('GetCurtainCustomizationDetailGoods', params)
}
// 新增商品明细 tabel
export function getCurtainTabel(params) {
  return http.get('GetCurtainCustomizationDetail', params)
}
// 窗帘删除
export function deleteCurtain(params) {
  return http.post('DeleteDetail', params)
}
// 窗帘查询接口
export function query (params) {
  return http.get('GetCurtainCustomizationList', params)
}
// 发送到 pos
export function sendPost (params) {
  return http.post('DataToPos', params)
}
// 导出
export function exportData (params) {
  return http.get('GetCurtainCustomizationListReport', params)
}
// 撤销
export function revoke (params) {
  return http.post('SetCurtainCustomizationDStatus', params)
}
// 上传确认单
export function uploadOrder(params) {
  return http.post('UploadFile', params)
}
// 更新修改地址
export function updataAddress(params) {
  return http.post('UpdateCustomerAddress', params)
}
// 发送订单到配送系统
export function sendDelivery(params) {
  return http.post('ConfirmationSlipToDistributionSystem', params)
}
