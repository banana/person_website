import Vue from 'vue'
import Vuex from 'vuex'
const data = require('../../static/table.json')

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    staffID: '',
    count: 10,
    userInfo: data.data, // 用户数据
    editDetailData: {} // 规章详情数据
  },
  mutations: {
    query (state, params) {
      let data = []
      for (let item of state.userInfo) {
        if (params.name == item.customerName) {
          console.log(item)
          data.push(item)
        } else {
          if (data.length < 0) {
            data = []
          }
        }
      }
      state.userInfo = data
    }
  },
  getters: {
    query: state => (params) => {
      for (let item of state.userInfo) {
        if (params.name == item.customerName) {
          return item
        }
      }
    }
  }
})
