import React, { Component } from 'react';
import './index.css';

import Wheel from "../Wheel";

class App extends Component {
  render() {
    const { items, itemChoice } = this.props;
    return (
      <div className="App">
        <Wheel items={items} itemChoice={itemChoice} />
      </div>
    );
  }
}

export default App;
