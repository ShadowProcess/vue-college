// 使用vue-cli3.0搭建项目比之前更简洁，没有了build和config文件夹。
// vue-cli3的一些服务配置都迁移到CLI Service里面了，
// 对于一些基础配置和一些扩展配置需要在根目录新建一个vue.config.js文件进行配置
module.exports = {

    //提交1
    // 基本路径
    // baseUrl从 Vue CLI 3.3 起已弃用使用publicPath来替代。
    // 在开发环境下，如果想把开发服务器架设在根路径，可以使用一个条件式的值
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',


    //构建输出目录（打包位置）
    //
    //outputDir
    //
    //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    //module.exports = {
    //    outputDir: 'dist',
    //}

    //静态资源目录
    //
    // assetsDir
    //
    // 放置生成的静态资源 (js、css、img、fonts) 的目录
    //
    // module.exports = {
    //  assetsDir: 'assets',
    // }

    // eslint代码检测
    // 是否开启eslint保存检测，有效值：ture | false | 'error'
    // 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败
    // 希望让 lint 错误在开发时直接显示在浏览器中，可以使用 lintOnSave: 'error'。这会强制 eslint-loader 将 lint 错误输出为编译错误

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    //indexPath: 'index.html',

    // 默认在生成的静态资源文件名中包含hash以控制缓存
    //filenameHashing: true,

    //webpack-dev-server 相关配置  //开发调试服务器配置项
    //devServer: {
    //         open: true,//设置自动打开
    //         port: 1880,//设置端口
    //         proxy: {
    //            //设置代理
    // eslint-disable-next-line no-irregular-whitespace
    // 　　　　　　'/axios': {
    // eslint-disable-next-line no-irregular-whitespace
    // 　　　　　　　　target: 'http://101.15.22.98',
    // eslint-disable-next-line no-irregular-whitespace
    // 　　　　　　　　changeOrigin: true,
    // eslint-disable-next-line no-irregular-whitespace
    // 　　　　　　　　secure: false, //如果是http接口，需要配置该参数
    // eslint-disable-next-line no-irregular-whitespace
    // 　　　　　　　　pathRewrite: {
    // eslint-disable-next-line no-irregular-whitespace
    // 　　　　　　　　　　'^/axios': ''
    // eslint-disable-next-line no-irregular-whitespace
    // 　　　　　　　　　　}
    // eslint-disable-next-line no-irregular-whitespace
    // 　　　　　　　　}
    //             }
    //         }
    //     }
    devServer: {

        open: true,         // npm run serve后自动打开页面

        host: '0.0.0.0',    // 匹配本机IP地址

        port: 8080,         // 开发服务器运行端口号

        compress: true      // 启用静态资源压缩算法
    }
}