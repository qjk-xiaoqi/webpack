const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {WebPlugin} = require('web-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
module.exports = {
    entry: {
        app: './main.js'// Chunk app 的 JS 执行入口文件
      },
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [ MiniCssExtractPlugin.loader,
                "css-loader"]
            }
        ]
    },
    plugins:[
        // 一个webPlugin 对应一个HTML文件
        new WebPlugin({
            template: './template.html',// HTML 模板文件
            filename: 'index.html'// 输出的HTML文件名
        }),
        new MiniCssExtractPlugin({
            filename: `[name].css`
        }),
        new ServiceWorkerWebpackPlugin({
            // 自定义的sw.js文件的路径
            // ServiceWorkerWebpackPlugin会把文件列表注入到生成的sw.js文件
            entry: path.join(__dirname, 'sw.js')
        })
    ],
    devServer: {
        // Service Workers依赖HTTPS,使用DevServer提供的HTTPS的功能
        https: true
    }
}