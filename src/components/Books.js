import React, { Component } from "react";
import Book from "./Book";

import axios from "axios";

import "./Books.css";

export class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/zyv02")
      .then(response =>
        response.data.books.map((book, index) => {
          book.id = index;
          return book;
        })
      )
      .then(response => this.setState({ books: response }));
  }

  render() {
    return (
      <div id="contentSection" className="container">
        {this.state.books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    );
  }
}

export default Books;
