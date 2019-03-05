import Vue from 'vue'
import App from './App'
import router from './router'

import less from 'less'
Vue.use(less)

//rebase测试

//在master上修改


// 导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 使用轮播图插件
Vue.use(VueAwesomeSwiper);
// 轮播图样式
import 'swiper/dist/css/swiper.css';

//图片懒加载
import VueLazyload from "vue-lazyload";
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3169332376,286772686&fm=26&gp=0.jpg',
  loading: 'http://img2.imgtn.bdimg.com/it/u=3430892304,2625741324&fm=26&gp=0.jpg',
  attempt: 1
})

//在进入路由之前每一次都会执行此方法,全局钩子，拦截功能
router.beforeEach(function (to,from,next) {
  document.title = to.meta.title;
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
