const  path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        // 输出文件存放目录
        path: path.resolve(__dirname, 'lib'),
        // 以何种方式导出库
        libraryTarget: 'commonjs2'
    },
    // 通过正则命中所有以react或者babel-runtime开头的模块，这些模块通过注册在运行环境中的全局变量访问，不用
    // 被重复打包进输出的代码里
    externals: /^(react|babel-runtime})/,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                // 排除 node_modules 目录下的文件
                // node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
            // 增加对css的支持
            test: /\.css/,
            // 提取出Chunk中的css代码到单独的文件
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
    // 输出Source Map
    devtool: 'source-map'
}