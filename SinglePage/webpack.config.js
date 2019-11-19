const path = require('path');
const {WebPlugin} = require('web-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        // app的javascript执行文件
        app:'./main.js'
    },
    output: {
        filename: '[name]_[chunkhash:8].js',
        path:path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            use:['babel-loader'],
            // 排除node_modules目录的文件
            exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                     'css-loader']
            }
        ]
    },
    plugins: [
        // 使用webplugin，一个webplugin对应一个HTML文件
        new WebPlugin({
            template:'./template.html',// html模板文件所在的文件路径
            filename: 'index.html'// 输出HTML的文件名称
        }),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        })

    ]
}