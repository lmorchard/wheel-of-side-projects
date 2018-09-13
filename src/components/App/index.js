import React, { Component } from 'react';
import './index.css';

import Wheel from "../Wheel";

class App extends Component {
  state = {
    itemChoice: null,
    spinStart: null
  };

  handleSpin = () => {
    const { items } = this.props;
    const rand = Math.random();
    const itemChoice = Math.floor(rand * items.length);
    this.setState({
      spinStart: Date.now(),
      itemChoice
    });
  }

  render() {
    const { items } = this.props;
    const { spinStart, itemChoice } = this.state;

    return (
      <div className="App" onClick={this.handleSpin}
           title="Click anywhere to spin the wheel">
        <Wheel {...{ items, itemChoice, spinStart }} />
      </div>
    );
  }
}

export default App;
