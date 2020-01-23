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
      .then(
        response => (
          this.setState({ books: response.data.books }),
          console.log(response.data.books)
        )
      );
  }

  render() {
    return this.state.books.map((book, index) => (
      <Book key={index} book={book} />
    ));
  }
}

export default Books;
