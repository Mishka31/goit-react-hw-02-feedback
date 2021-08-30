import React from "react";
import s from "./feedback.module.css";

class Feedback extends React.Component {
  static defaultProps = {
    initProcent: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    procenteg: this.props.initProcent,
  };

  onButtonClick1 = () => {
    this.setState((s) => ({
      good: s.good + 1,
      total: 1 + s.good + s.neutral + s.bad,
      procenteg: Math.round((s.good / s.total) * 100),
    }));
  };
  onButtonClick2 = () => {
    this.setState((s) => ({
      neutral: s.neutral + 1,
      total: 1 + s.good + s.neutral + s.bad,
      procenteg: Math.round((s.good / s.total) * 100),
    }));
  };
  onButtonClick3 = () => {
    this.setState((s) => ({
      bad: s.bad + 1,
      total: 1 + s.good + s.neutral + s.bad,
      procenteg: Math.round((s.good / s.total) * 100),
    }));
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
        <p>Total: {this.state.total}</p>
        <p>Positive feedback: {this.state.procenteg}%</p>
      </div>
    );
  }
}
export default Feedback;
