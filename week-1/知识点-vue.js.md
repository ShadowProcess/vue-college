##vue第一天复习
- vm => viewModel 数据最终都会被vm所代理
- {{a}}取值表达式，通过{{}}来进行取值，默认可以不写this
- 表达式 赋值运算 计算 三元表达式
- {{a == 1 ? '2' == b ? '5':2:3}}
- 尽量在大括号少写逻辑
- 指令： dom元素的行间属性，vue提供了内置的指令，必须以v-开头，后面的值均为变量
    - v-model (表单元素) 忽略掉value checked selected,将数据绑定到视图上，视图修改会影响数据的变化
    - v-text 取代{{}}  v-cloak  解决闪烁（块）的问题，后期都不采用，使用v-cloak要加样式
    - v-once 绑定一次，数据在变化不会导致视图刷新，写在不想刷新的标签上
    - v-html 将html字符串转换为HTML
    - v-for 循环(数组，对象，字符串，数字)
    ```
   <div v-for="value in/of 数组"></div>  
   <div v-for="(value,index) in/of 数组"></div>  
    ```
 ### 事件v-on(@)
 - 绑定给dom元素，函数需要定义在methods中，不能和data里的内容重名， this指向的是实例，不能使用箭头函数，事件源对象
 - 如果不写括号，可以自动传入，否则只能手动传入，$event
 - <div @事件名="fn"></div> 
 
 #vue第二天复习
- v-model（如果checkbox，select多选是数组，提供一个value属性）
（radio，checkbox分组靠的是v-model），checked selected不存在 
- 修饰符 .number.lazy
- 按键修饰符 .enter.ctrl.keyCode
- 事件 
    stopPropagation，cancelBubble=true;
    preventDefault,returnValue=false
- jquery once
- e.srcElement&&e.target 判断事件源    
 
 
 
 
 
 
 
 
 
 
 
 
    

# 安装bootstrap
- npm install bootstrap
# 安装vue
- npm install vue
# 安装ajax框架 axios[axios是一个基于promise的http库，Promise管理异步，告别传统callback方式]
- npm install axios

# vue-cli是什么?
vue-cli 是一个官方发布 vue.js 项目脚手架，使用 vue-cli 可以快速创建 vue 项目
# webpack是什么?
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，
找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），
并将其转换和打包为合适的格式供浏览器使用。

##脚本中的export是什么意思
```
<script>
//export用于导出 ，Vue单文件组件通常需要导出一个对象
//这个对象是Vue实例的选项对象，以便于在其它地方可以使用import引入

//export default命令并不是在每个文件中都是必须的。
//它的作用只是用于导出模块，在别的模块需要调用这个模块的时候，
//可以通过import命令引入使用的。
//里面的data()方法要return
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
```
> import HelloWorld from './components/HelloWorld.vue' 导入指定的Vue组件

