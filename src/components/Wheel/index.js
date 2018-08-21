import React, { Component } from "react";
import classNames from "classnames";

import "./index.css";

class Wheel extends Component {
  constructor(props) {
    super(props);
    this.unmounted = false;
    this.wheelRef = React.createRef();
    this.wheelStyle = null;
    this.wheelAngle = 0;
  }

  state = {
    animState: "idle",
    lastSpinStart: null,
    targetAngle: 0,
    prevTargetAngle: 0
  };

  componentDidMount() {
    const wheelEl = this.wheelRef.current;
    this.wheelStyle = window.fooStyle = window.getComputedStyle(wheelEl);
    if (wheelEl) {
      ["start", "iteration", "cancel", "end"].forEach(name =>
        wheelEl.addEventListener(
          `animation${name}`,
          this[`handleAnimation${name.charAt(0).toUpperCase() + name.substr(1)}`]
        ));
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  static getDerivedStateFromProps(props, state) {
    const { spinStart, items, itemChoice } = props;
    const { lastSpinStart, targetAngle: prevTargetAngle } = state;

    const newState = {};

    if (spinStart !== lastSpinStart) {
      const itemAngle = 360 / items.length;
      const targetAngle = 360 - (itemAngle * itemChoice);

      Object.assign(newState, {
        animState: "spinning",
        lastSpinStart: spinStart,
        prevTargetAngle,
        targetAngle
      });

      // HACK: Not the best place for this...?
      const style = document.documentElement.style;
      style.setProperty("--targetAngle", `${newState.targetAngle}deg`);
      style.setProperty("--prevTargetAngle", `${newState.prevTargetAngle}deg`);
    }

    return newState;
  };

  handleAnimationStart = () => {
    const { animState } = this.state;
    if (animState === "spinning") {
    }
  }

  handleAnimationIteration = () => {
  }

  handleAnimationEnd = () => {
    const { animState } = this.state;
    if (animState === "spinning") {
      this.setState({ animState: "chosen" });
    }
  }

  render() {
    const { items, itemChoice } = this.props;
    const { animState } = this.state;

    const className = classNames(
      "wheel",
      `wheel-count-${items.length}`,
      `anim-${animState}`
    );

    return (
      <ul className={className} ref={this.wheelRef}>
        {items.map((item, idx) => (
          <li key={idx}
              className={classNames({ selected: itemChoice === idx })}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default Wheel;
