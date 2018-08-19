import React from 'react';
import classNames from "classnames";

import "./index.css";

const Wheel = ({ items }) => (
  <ul className={classNames("wheel", `wheel-count-${items.length}`)}>
    {items.map((item, idx) => <li key={idx}><span>{item}</span></li>)}
  </ul>
);

export default Wheel;