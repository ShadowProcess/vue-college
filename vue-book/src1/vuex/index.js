import Vue from 'vue'
import Vuex from 'vuex'
import Logger from 'vuex/dist/logger.js'

import * as Types from './mutations-type' // 日志插件

Vue.use(Vuex)
// 容器是唯一的
const state = {count: 0}
const mutations = {
  add (state, count) { // state是自动放入的，默认就是指的当前state的状态
    state.count += count
  },
  minus (state) {
    state.count -= 1
  }
}
// eslint-disable-next-line no-undef
export default store = new Vuex.Store({
  state: state,
  mutations,
  plugins: [Logger()],
  strict: true // 只能通过mutation来更改状态  mutation相当于管理员
  // mutation不支持异步
})
// eslint-disable-next-line no-unused-vars
let s = [Types.DECREMENT]
// eslint-disable-next-line no-unused-vars
let v = [Types.INCREMENT]
