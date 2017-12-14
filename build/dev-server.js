var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf')
var WebpackDevServer = require('webpack-dev-server')
var config = require('../config')
//自动打开浏览器 wenpack自带
var opn = require('opn')

// default port where dev server listens for incoming traffic
// automatically open browser, if not set will be false
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

var compiler = webpack(webpackConfig,function(){
	console.log('success')
});
webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:"+config.dev.port+'/');
webpackConfig.entry.app.unshift("webpack/hot/dev-server");

var server = new WebpackDevServer(compiler, {
    contentBase:'dist/',
    //publicPath: "/assets/"
    hot: true,
});

server.listen(config.dev.port);
var uri = 'http://localhost:' + config.dev.port
console.log('listen in '+uri);
opn(uri)
