import React, { Component } from 'react';

export default class DemoThree extends Component {
  render() {
    return (
      <div>
        <h1
          ref={x => {
            this.hEl = x;
          }}
        >
          DemoThree
        </h1>
        <button
          onClick={() => {
            console.log(this.hEl);
          }}
        >
          获取元素
        </button>
      </div>
    );
  }
}
