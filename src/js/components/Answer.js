import React from "react";

export default class Answer extends React.Component {
  handleNext (e) {
    e.preventDefault();
    this.props.callNextQuestion();
    console.log("ok!");
  }
  render () {
    return(
      <div>
        {this.props.correct == 1 &&
          <div>
            <h3>正解</h3>
            <button onClick={this.handleNext.bind(this)}>次の問題</button>
          </div>
        }
        {this.props.correct == 0 &&
          <div>
            <h3>不正解</h3>
            <p>正解は{this.props.answer}</p>
            <button onClick={this.handleNext.bind(this)}>次の問題</button>
          </div>
        }
      </div>
    )
  }
}
