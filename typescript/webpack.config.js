const path = require('path');
module.exports = {
    entry: './main',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'./dist')
    },
    resolve: {
        // 先尝试以ts为后缀的TypeScript文件
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    devtool: 'source-map'
}