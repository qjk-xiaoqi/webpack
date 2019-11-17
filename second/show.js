// 操作DOM
function show(content) {
    window.document.getElementById('app').innerText = 'hello,' + content;
}
// 使用CommonJS规范导出show函数
module.exports = show;