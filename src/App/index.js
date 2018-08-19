import React, { Component } from 'react';
import './index.css';

import Wheel from "../Wheel";

class App extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="App">
        <Wheel items={items} />
      </div>
    );
  }
}

export default App;
