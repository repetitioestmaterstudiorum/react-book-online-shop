import React, { Component } from "react";
import Book from "./Book";

import "./Books.css";

export class Books extends Component {
  componentDidMount() {
    document.addEventListener("keydown", event => {
      if (event.keyCode === 27) {
        window.location.replace("#!");
      }
      if (event.keyCode === 37) {
        window.location.replace(
          "#img" + (parseInt(window.location.hash.substring(4)) - 1)
        );
      }
      if (event.keyCode === 39) {
        window.location.replace(
          "#img" + (parseInt(window.location.hash.substring(4)) + 1)
        );
      }
    });
  }

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
