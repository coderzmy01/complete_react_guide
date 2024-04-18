import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div>数字浙江</div>
    {new Array(5).fill(null).map((_, index) => {
      return <li>{index}</li>;
    })}
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