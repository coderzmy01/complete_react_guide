import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';
import { Demo } from './views/DemoOne';
import Dialog from './components/Dialog';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div>数字浙江</div>
    <Dialog title="友情提示" content="大家出门做好个人防护" />
    <Dialog content="我们一定要好好学React？">
      <button>确定</button>
      <button>很确定</button>
    </Dialog>
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
