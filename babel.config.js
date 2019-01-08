//vue-cli3生成的项目babel.config.js中的@vue/app是什么东西?

//Babel可以把JSX语法编译成JS语法，使得写 UI代码更加方便。
//Babel可以将ES6语法编译成ES5的语法，使你的应用不用担心在不支持ES6 的浏览器上无法运行的问题。
//你如果想添加一些自定义的Babel配置，你可以配置babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
