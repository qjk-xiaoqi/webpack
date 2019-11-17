module.exports = {
    plugins: [
        // 该插件可以使我们使用下一代css语法编写代码，在通过postcss转换为目前浏览器可识别的css,该插件可自动加前缀
        require('postcss-cssnext')
    ]
}