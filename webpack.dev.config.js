var path=require('path')
var webpack=require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    // 指定spa应用的入口文件
    entry: {
    	app:path.resolve(__dirname, 'src/js/app.js')
    },
    // 指定项目构建的输出位置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle1[hash].js',
        publicPath:''
    },
    devServer: {
	    // 指定启动服务的更目录
	    contentBase: __dirname + '/src',
	    // 指定端口号
	    port: 8081,
	    host: 'localhost',
	    // 启用热更新
	    hot: true,
	    // 以下信息可有可无，为了完整
	    inline: true, 
	    historyApiFallback: true,
	    noInfo: false,
	    // stats: 'minimal',
	    // publicPath: publicPath
	},
    plugins: [
	   //new webpack.HotModuleReplacementPlugin(),
	   // 自动生成html插件
	   new HtmlWebpackPlugin({
	      template: './template.html',
	      inject: true
	   }),
	]
}