import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// const states = require("./data/states.json");

fetch("./items.txt")
  .then(response => response.text())
  .then(itemsTxt => {
    const items = itemsTxt.split(/\n/)
      .slice(0, 20)
      .map(item => item.substr(2));

    ReactDOM.render(
      <App items={items} />,
      document.getElementById('root')
    );
  });

registerServiceWorker();
