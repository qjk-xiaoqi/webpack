const express = require('express');
const {render} = require('./dist/bundle_server');
const app = express();

// 调用构建出的bundle_server.js中暴露的渲染函数，在拼接下HTML模板，形成完整的HTML文件
app.get('/', function(req, res) {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <div id="app">${render()}</div>
        <script src="./dist/bundle_browser.js"></script>
    </body>
    </html>
    `)
});
app.use(express.static('.'));

app.listen(3000, function () {
    console.log('app listening on port 3000');
})