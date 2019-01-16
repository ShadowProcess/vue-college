## Node
Node 是一个让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为与PHP、Python、Perl、Ruby 
等服务端语言平起平坐的脚本语言。 发布于2009年5月，由Ryan Dahl开发，实质是对Chrome V8引擎进行了封装。


## Vue
Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，
Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

如果你只是想单纯的使用vue做你的前端开发的辅助插件的话，那么你只需要直接<script>引用vue.js便也可以实现vue的双向绑定的功能；
而至于node.js，如果一定要说的话，就是，node.js有提供丰富的npm插件供你使用，如果你需要使用vue搭建cli 的vue脚手架的话，
那么使用node.js可以快速的创建出vue-cli的脚手架，仅此而已

## Vue的两个核心点
·响应的数据变化
    当数据发生变化时->视图自动更新
·组合的视图组件
    ui页面映射为组件树
    划分组件可维护，可复用，可测试
    
Object.defineProperty(es5)的没有替代方案
不支持ie8 <=   

## 安装vue
- cdn的方式
- npm安装 node package manager
```
npm init
``` 
>初始化会产生一个package.json的文件，这个文件用来描述项目的依赖
>包名不能有大写字母 特殊字符 中文，而且不要和安装包的名字相同    