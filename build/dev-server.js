var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf')
var WebpackDevServer = require('webpack-dev-server')
var config = require('../config')
var express = require('express')
//自动打开浏览器 wenpack自带
var opn = require('opn')

// default port where dev server listens for incoming traffic
// automatically open browser, if not set will be false
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware


// 创建一个express实例
var app = express()

var compiler = webpack(webpackConfig)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.dev.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)

// 注册中间件
app.use(devMiddleware)
app.use(hotMiddleware)

// 监听 8888端口，开启服务器
app.listen(config.dev.port||8080, function (err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + config.dev.port||8080
    console.log('Listening at http://localhost:'+config.dev.port||8080)
    opn(uri)
    
})
//webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:"+config.dev.port+'/');
//webpackConfig.entry.app.unshift("webpack/hot/dev-server");
//
//var server = new WebpackDevServer(compiler, {
//  contentBase:'dist/',
//  //publicPath: "/assets/"
//  hot: true,
//});
//
//server.listen(config.dev.port);
//var uri = 'http://localhost:' + config.dev.port
//console.log('listen in '+uri);
//opn(uri)
