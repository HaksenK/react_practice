import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.word = "Welcome";
    this.state = {name: "Jacob"};
  }
  render() {
    setTimeout(
      () => {this.setState({name: "Hello"});}
      , 2000
    );
    return (
      <div>
        {this.state.name}
        <Header title="header!"/>
        <h1>{this.word}!</h1>
        <Footer/>
      </div>
    );
  }
}
