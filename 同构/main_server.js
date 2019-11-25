import React from 'react';
import {renderToString} from 'react-dom/server';
import {AppComponent} from './AppComponent';

// 导出渲染函数，以给采用node.js编写的HTTP服务器代码调用
export function render() {
    // 把根组件渲染成HTML字符串
    return renderToString(<AppComponent/>);
}