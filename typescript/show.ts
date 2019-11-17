// 为show函数增加类型检查
export function show(content: string) {
    window.document.getElementById('app').innerText = `hello,`+content;
}