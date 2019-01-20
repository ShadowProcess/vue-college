# vue-cli是什么?
vue-cli 是一个官方发布 vue.js 项目脚手架，使用 vue-cli 可以快速创建 vue 项目
# webpack是什么?
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，
找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），
并将其转换和打包为合适的格式供浏览器使用。

# npm安装指定版本的依赖
npm install bootstrap@1.3.1
> 在npm中安装固定的版本号package，只需要在其后加 ‘@版本号’

# npm删除某个依赖
npm uninstall bootstrap

# npm更新某个依赖
npm update bootstrap

# npm查看安装了哪些模块
npm ls

# npm发布模块
- 在npm网站注册一个自己的账号，待会儿会用到这个账号，npm账号注册地址：https://www.npmjs.com/signup。注册完成npm会发一封邮件到你填写的邮箱里边，记得到你填写的邮箱里边去验证一下
- 输入npm login,然后输入用户名和密码
- npm publish 你的文件夹名字
- 这样自己的模块就发布了
# npm删除你发布的模块
- 可以通过npm --force unpublish 你的模块名，来删除发布的模块（超过24小时就不能删除了）。