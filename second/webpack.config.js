const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    //Js执行入口文件
    entry: './main.js',
    output: {
        // 将所有的依赖的模块合并输出到一个bundle.js文件
        filename: 'bundle.js',
        // 将输出的文件都放在dist目录下
        path: path.resolve(__dirname, './dist')
    },
     
    module: {
        rules: [
            {
                // 用正则表达式去匹配要用到Loader转换的css文件
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                     'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
              collapseWhitespace: true,
            },
            hash: true,
          }),
        new MiniCssExtractPlugin({
            filename: ' main.css'
        })
    ]
}