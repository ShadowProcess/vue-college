import Vue from 'vue'; //runtime不支持template 只支持render
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter); //todo 和以前不一样的地方，引入路由必须要使用use
//todo 注册一些全局的内容
export default new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/list',component:List},
    ]
});