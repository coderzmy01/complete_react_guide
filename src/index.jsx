import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';
const root = ReactDOM.createRoot(document.getElementById('root'));
let flag = false;
let isRun = false;
root.render(
  <React.StrictMode>
    <div>数字浙江</div>
    <br />
    <button
      style={{
        display: flag ? 'block' : 'none',
      }}
    >
      按钮1
    </button>
    <br />
    {isRun ? <button>按钮2</button> : false}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
