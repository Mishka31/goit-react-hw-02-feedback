import React from "react";
import s from "./feedback.module.css";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick1 = () => {
    this.setState((state) => ({ good: state.good + 1 }));
  };
  onButtonClick2 = () => {
    this.setState((state) => ({ neutral: state.neutral + 1 }));
  };
  onButtonClick3 = () => {
    this.setState((state) => ({ bad: state.bad + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button className={s.button} type="button" onClick={this.onButtonClick1}>
            Good
          </button>
          <button className={s.button} type="button" onClick={this.onButtonClick2}>
            Neutral
          </button>
          <button className={s.button} type="button" onClick={this.onButtonClick3}>
            Bad
          </button>
        </div>
        <h3>Statistic</h3>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}
export default Feedback;
