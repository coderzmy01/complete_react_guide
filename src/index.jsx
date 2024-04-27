import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';
import DemoThree from './views/DemoThree';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div>数字浙江</div>
    <DemoThree />
  </React.StrictMode>
);

//? 需求一
// let flag = false;
// let isRun = false;
// root.render(
//   <React.StrictMode>
//     <div>数字浙江</div>
//     <br />
//     <button
//       style={{
//         display: flag ? 'block' : 'none',
//       }}
//     >
//       按钮1
//     </button>
//     <br />
//     {isRun ? <button>按钮2</button> : false}
//   </React.StrictMode>
// );
