var path=require('path')

module.exports = {
    // 指定spa应用的入口文件
    entry: path.resolve(__dirname, 'src/js/app.js'),
    // 指定项目构建的输出位置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }
}