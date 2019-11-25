const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './main_server.js',
    // 为了不打包仅Node.js内置的模块，例如fs,net
    target: 'node',
    // 为了不打包进node_modules 目录下的第三方模块
    externals:[nodeExternals()],
    output: {
        // 为了以commonJS2规范导出渲染函数，以给采用node.js编写的HTTP服务器调用
        libraryTarget: 'commonjs2',
        filename: 'bundle_server.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude:path.resolve(__dirname, 'node_modules')
            },
            {
                // CSS代码不能被打包用于服务器的代码中去，忽略css 文件
                test: /\.css$/,
                use: ['ignore-loader']
            }
        ]
    },
    devtool: 'source-map'
}