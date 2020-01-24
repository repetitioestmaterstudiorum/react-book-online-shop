import React, { Component } from "react";
import Book from "./Book";

import "./Books.css";

export class Books extends Component {
  render() {
    return (
      <div id="contentSection" className="container">
        {this.props.books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    );
  }
}

export default Books;
