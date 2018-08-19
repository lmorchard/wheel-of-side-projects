import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const states = require("./data/states.json");
const items = Object.values(states).slice(0, 50);

ReactDOM.render(
  <App items={items} />,
  document.getElementById('root')
);
registerServiceWorker();
