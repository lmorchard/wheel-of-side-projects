import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const states = require("./data/states.json");

fetch("./items.txt")
  .then(response => response.text())
  .then(itemsTxt => {
    const items = Object.values(itemsTxt.split(/\n/)).slice(0, 20);

    ReactDOM.render(
      <App items={items} />,
      document.getElementById('root')
    );
  });

registerServiceWorker();
