import React from 'react';
export const Demo = function Demo(props) {
  // console.log(props)
  let { children } = props;
  // 可以基于React.Children对象中提供的方法，对props.children做处理
  children = React.Children.toArray(children);
  const headerSlot = children.filter(child => {
    return child.props?.slot === 'header';
  });
  const footerSlot = children.filter(child => {
    return child.props?.slot === 'footer';
  });
  console.log(children);
  return (
    <div className="demo">
      {headerSlot}
      <h2>你好</h2>
      {footerSlot}
    </div>
  );
};
