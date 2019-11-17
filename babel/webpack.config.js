const path = require('path');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:['babel-loader']
            }
        ]
    },
    // 输出source-map 以便直接调试ES6源码
    devtool:'source-map'
};