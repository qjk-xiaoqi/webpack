const path = require('path');
//使用vue-loader@15以上都需要使用vueloaderplugin这个插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  // JS 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        // 它会应用到普通的 `.js` 文件
        // 以及 `.vue` 文件中的 `<script>` 块
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        // 它会应用到普通的 `.css` 文件
        // 以及 `.vue` 文件中的 `<style>` 块
        {
          test: /\.css$/,
          use: [
            'css-loader'
          ]
        }
      ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
};
