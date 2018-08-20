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

    const itemAngle = 360 / items.length;
    const itemChoice = Math.floor(Math.random() * items.length);

    const style = document.documentElement.style;
    style.setProperty("--targetAngle", `${720 - (itemAngle * itemChoice)}deg`);

    ReactDOM.render(
      <App items={items} itemChoice={itemChoice} />,
      document.getElementById('root')
    );
  });

registerServiceWorker();
