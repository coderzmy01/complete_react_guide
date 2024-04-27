import React, { Component } from 'react';

export default class Vote extends Component {
  static defaultProps = {
    title: 'zf-FE',
  };
  state = {
    supNum: 10,
    oppNum: 15,
  };
  render() {
    let { title } = this.props;
    let { supNum, oppNum } = this.state;
    return (
      <div className="vote-box">
        <div className="header">
          <h2 className="title">{title}</h2>
          <span>{supNum + oppNum}人</span>
        </div>
        <div className="main">
          <p>支持人数:{supNum}人</p>
          <p>反对人数:{oppNum}人</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              console.log('first');
              this.setState({
                supNum: supNum + 1,
              });
            }}
          >
            支持
          </button>
          <button
            onClick={() => {
              // this.state.oppNum--
              // this.forceUpdate()
            }}
          >
            反对
          </button>
        </div>
      </div>
    );
  }
}
