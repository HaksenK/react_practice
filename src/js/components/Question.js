import React from "react";
import Answer from "./Answer";
import Lexicon from './lexicon.json';

export default class Question extends React.Component {
  constructor() {
    super();
    this.lexicon = Lexicon;
    this.keys = Object.keys(this.lexicon);
    this.length = this.keys.length;
    let idx = Math.floor( Math.random() * this.length );
    this.state = {ans: "word", quiz: this.lexicon[this.keys[idx]], value: "", correct: -1};
  }
  reconstruct() {
    let idx = Math.floor( Math.random() * this.length );
    this.setState({ans: "word2", quiz: this.lexicon[this.keys[idx]]});
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
