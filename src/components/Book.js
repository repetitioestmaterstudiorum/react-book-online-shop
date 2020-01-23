import React, { Component } from "react";

import "./Book.css";

export class Book extends Component {
  render() {
    console.log(this.props);
    return <div>Helloo from Book.js</div>;
  }
}

export default Book;
