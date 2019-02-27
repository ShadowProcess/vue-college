let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('./dist')
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_moudles/},
            {test:/\.css$/,use:['style-loader','class-loader']},
            {test:/\.less$/,use:['style-loader','class-loader','less-loader']},
            {test:/\.(jpg|png|gif|jpeg)$/,use:'url-loader?limit=8192'},
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}