import React, { Component } from "react";
import Book from "./Book";

import axios from "axios";

import "./Books.css";

const buildHTML = data => {
  console.log("buildHTML() triggered: ");
  console.log(data);
};

// async function apiCall() {
//   const url = "https://api.myjson.com/bins/zyv02";
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }
// let data = [];
// apiCall().then(result => ((data = result.books), buildHTML(data)));

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
    return this.state.books.map((book, id) => <Book key={id} book={book} />);
  }
}

export default Books;
