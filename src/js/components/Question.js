import React from "react";
import Answer from "./Answer";

export default class Question extends React.Component {
  constructor() {
    super();
    this.state = {ans: "word", quiz: "the word is the word", value: "", correct: -1};
    this.ans = null;
  }
  reconstruct() {
    this.setState({ans: "word2", quiz: "the word2 is the word2"});
  }
  handleAnswer(e) {
    e.preventDefault()
    console.log(this.state);
    if (this.state.value == this.state.ans) {
      this.setState({correct: 1});
    } else {
      this.setState({correct: 0});
    }
    this.reconstruct();
  }
  render() {
    return (
      <div>
        <p>{this.state.quiz}</p>
        <input
          onChange={(e) => {
            let text = e.target.value;
            this.setState({ value: e.target.value })
          }}
          type="text"
          value={this.state.value}
        />
        <button onClick={this.handleAnswer.bind(this)}>GO!</button>
        <Answer correct={this.state.correct} answer={this.state.ans} />
      </div>
    );
  }
}
