import Vue from 'vue/dist/vue.js';
//这样直接引用vue 引用的并不是vue.js 引用的是vue的runtime
//vue = compiler + runtime (compiler可以编译模板)
// compiler有6k

import App from './App.vue';
console.log(App);

new Vue({
    //render函数的作用是将虚拟的dom渲染成真实的dom
    //createElement返回的是虚拟的dom
    render:(h)=> h(App)

    /*template:'<div>hello</div>'*/
}).$mount('#app');


/*
render: (h) => {
    return h('h1', ['hello', h('span', '一则头条')]); //第一个参数是标签，第二个是内容
}
*/

/*
render: function (createElement) {
    return createElement('h1', [
        'hello',
        createElement('span', '一则头条')
    ]); //第一个参数是标签，第二个是内容
}
*/
