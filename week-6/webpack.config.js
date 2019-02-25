// webpack配置必须采用commonjs写法
let path = require('path'); //专门处理路径问题，以当前路径解析为一个相对路径
console.log(path.resolve('./dist')); //参数为相对路径，返回绝对路径
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    //打包的入口文件 webpack会自动查找相关的依赖进行打包
    entry:'./src/main.js',
    output:{
        //打包后的名字
        filename:'bundle.js',
        //必须是一个绝对路径
        path:path.resolve('./dist')
    },
    //模块解析规则
    //-js 匹配所有的js 用babel-loader转译 排除掉node——modules
    module:{
        rules:[
            {
                test:/\.js$/,use:'babel-loader',exclude:/node_modules/
            },
            {
                //use时 从右往左写
                test:/\.css/,use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,use: ['style-loader','css-loader','less-loader']
            },
            {
                //转换base64只在8192字节范围内转化，其它情况输出图片
                test:/\.(jpg|png|gif)$/,use: ['url-loader?limit=8192']
            },
            {
                test:/\.(eot|svg|woff|woff2|wtf)$/,use: ['url-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({ //自动插入到dist目录中
            template:'./src/index.html', //使用的模板
            /*filename: 'login.html' //产出的文件名字*/
        })
    ]
}