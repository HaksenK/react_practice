import React from "react";
import Question from "./Question";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.point = 0;
  }
  render() {
    return (
      <div>
        <Header />
        <Question />
        <Footer />
      </div>
    );
  }
}
