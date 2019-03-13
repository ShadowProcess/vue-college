//在build目录中的 webpack.base.conf.js 可以修改打包目录
document.body.innerHTML = 'hello'

//vuex 平级组件交互，找共同的父级解决，跨组件交互      eventBus处理方式混乱(发布订阅)

//vuex主要借鉴了(flux redux),vuex只能在vue中使用（单独为vue开发的）

//vuex为了大型项目，主要是（状态）管理,将数据统一管理
/*
data(){

}
*/

import Vue from 'vue';
import App from './App.vue';
import store from './vuex'

// 计数器
new Vue({
  el: '#app',
  ...App,
  store: store //store被注册到了实例上
  //所有组件都会有一个属性 this.$store
});
