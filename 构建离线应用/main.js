
require('./main.css');
if (navigator.serviceWorker) {
    window.addEventListener('DOMContentLoaded', function() {
        // 调用serviceWorker.register注册，参数/sw.js为脚本文件所在的URL路径
        navigator.serviceWorker.register('sw.js')
    })
}

window.document.getElementById('app').innerHTML = 'Hello webpack';