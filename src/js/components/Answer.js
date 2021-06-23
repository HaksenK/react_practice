import React from "react";

export default class Answer extends React.Component {
  render () {
    return(
      <div>
        {this.props.correct == 1 && 
          <div>
            <h3>正解</h3>
            <button>次の問題</button>
          </div>
        }
        {this.props.correct == 0 && 
          <div>
            <h3>不正解</h3>
            <p>正解は{this.props.answer}</p>
            <button>次の問題</button>
          </div>
        }
      </div>
    )
  }
}
