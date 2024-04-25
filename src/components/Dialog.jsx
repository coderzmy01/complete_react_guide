import React from 'react';

export default function Dialog(props) {
  let { content, title, children } = props;
  children = React.Children.toArray(children);
  return (
    <div className="dialog-box">
      <div className="header">
        <span>{title}</span>
        <span>x</span>
      </div>
      <div className="main">{content}</div>
      <div className="footer">{children}</div>
    </div>
  );
}
Dialog.defaultProps = {
  title: '学前端找啸天',
};
