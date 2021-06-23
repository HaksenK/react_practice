import React from "react";
import Question from "./Question";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.point = 0;
  }
  render() {
    return (
      <Question />
    );
  }
}
