import modal from './notify.vue';
let notify = { //需要在此对象用户一个install方法

};

/*this.$notify('吃饭了吗',{delay: 1000})*/
notify.install = function (Vue,options={delay:3000}) {
    Vue.prototype.$notify = function (message,opt={}) {
        if(notify.el) return;
        options = {...options,...opt} //todo 用自己调用插件时，传递过来的属性，覆盖默认设置好的
        let V = Vue.extend(modal) //返回的是一个构造函数的子类，参数是包含组件选项的对象
        let vm = new V;
        let oDiv = document.createElement('div'); //当创建一个div，将实例挂载到元素上
        vm.$mount(oDiv);
        vm.value = message;
        document.body.appendChild(vm.$el); //把当前的实例 扔到对象上
        notify.el = vm.$el;
        setTimeout(()=>{ //延迟多少秒移除dom元素
            document.body.removeChild(vm.$el); //将实例上的元素删除
            notify.el = null;
        },options.delay);
    }
};

//导出这个包含install的对象，如果使用Vue.use就会调用这个install方法
export default notify;


/*
console.log(1, ...[2, 3, 4], 5)

// 1 2 3 4 5
*/
