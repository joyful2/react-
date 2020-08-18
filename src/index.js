import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './demo3 使用context层层传递数据';
import App from './demo1 嵌套组件的生命周期.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// a 删除
// b,c 更新
// d 创建
