import React, { Component } from 'react';
const Child2 = React.forwardRef(function Child2(props, ref) {
  return (
    <>
      <h1>child2222</h1>
      <button ref={ref}>获取ref</button>
    </>
  );
});
class Child1 extends Component {
  render() {
    return (
      <>
        <h1>child1111</h1>
      </>
    );
  }
}
export default class Demo extends Component {
  render() {
    return (
      <div>
        <Child1
          ref={x => {
            this.child1 = x;
          }}
        />
        <Child2
          ref={x => {
            this.child2 = x;
          }}
        />
      </div>
    );
  }
  componentDidMount() {
    console.log('child1', this.child1);
    console.log('child2', this.child2);
  }
}
