import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.word = "Welcome";
  }
  render() {
    return (
      <div>
        <Header/>
        <Header/>
        <h1>{this.word}!</h1>
        <Footer/>
      </div>
    );
  }
}
