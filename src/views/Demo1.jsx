import React, { Component } from 'react';
// import { flushSync } from 'react-dom';

export default class Demo1 extends Component {
  state = {
    x: 0,
  };
  handle = () => {
    console.log('111');
    for (let i = 0; i <= 20; i++) {
      this.setState(prevState => {
        return {
          x: prevState.x + 1,
        };
      });
    }
  };
  render() {
    console.log(this.state.x);
    return <div onClick={this.handle}>Demo1</div>;
  }
}
