import React, { PureComponent } from 'react';

export default class DemoTwo extends PureComponent {
  state = {
    arr: [1, 2, 3],
  };
  render() {
    let { arr } = this.state;
    return (
      <>
        {arr.map(item => {
          return (
            <span
              style={{
                display: 'inline-block',
                width: '200px',
                height: '200px',
                marginRight: '20px',
                backgroundColor: 'orange',
              }}
            >
              {item}
            </span>
          );
        })}
        <button
          onClick={() => {
            arr.push(Math.random() * 3 + 2);
            this.setState({
              arr: [...arr],
            });
          }}
        >
          新增
        </button>
      </>
    );
  }
}
