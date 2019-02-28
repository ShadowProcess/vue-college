import Vue from 'vue'; //runtime不支持template,只支持render
//若想使用template，那么需要import Vue from 'vue/dist/vue.js';   vue.js包含template  compiler+runtime

import App from './App.vue';


//todo 自定义插件
import notify from './plugin/notify.js';
Vue.use(notify,{delay:2000});
//todo 使用插件

import router from './router/router.js';
new Vue({
    router:router,
    el:'#app',
    render:h=>h(App)
});

