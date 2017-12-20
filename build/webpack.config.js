var path=require('path')
var webpack=require('webpack')
//var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    // 指定spa应用的入口文件
    entry: {
    	app:['./src/app.js']
    },
    // 指定项目构建的输出位置
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name][hash].js',
        publicPath:''
    },
	module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: []
}