import React from "react";
import Section from "./section/section.jsx";
import Panel from "./panel/panel.jsx";
import Statistic from "./statistic/statistic.jsx";
import Notification from "./notification/notification.jsx";

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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };
  onButtonGood = () => {
    this.setState((s) => ({
      good: s.good + 1,
      total: this.countTotalFeedback(),
      procenteg: this.countPositiveFeedbackPercentage(),
    }));
  };
  onButtonNeutral = () => {
    this.setState((s) => ({
      neutral: s.neutral + 1,
      total: this.countTotalFeedback(),
      procenteg: this.countPositiveFeedbackPercentage(),
    }));
  };
  onButtonBad = () => {
    this.setState((s) => ({
      bad: s.bad + 1,
      total: this.countTotalFeedback(),
      procenteg: this.countPositiveFeedbackPercentage(),
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <Panel onGood={this.onButtonGood} onNeutral={this.onButtonNeutral} onBad={this.onButtonBad} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistic Good={good} Neutral={neutral} Bad={bad} Total={this.countTotalFeedback()} Positive={this.countPositiveFeedbackPercentage()} />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
export default Feedback;
