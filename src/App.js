// known issue: when the view is filtered, the next and previous buttons might show nothing at all

import React, { Component } from "react";
import Header from "./components/layout/Header";
import Books from "./components/Books";
import Footer from "./components/layout/Footer";

import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    books: [],
    initialBooks: []
  };

  onloadState = {};
  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/zyv02")
      .then(response =>
        response.data.books.map((book, index) => {
          book.id = index;
          return book;
        })
      )
      .then(response => this.setState({ initialBooks: response }));
  }

  findContent = searchContent => {
    const filteredBooks = this.state.initialBooks.filter(book =>
      (book.description + book.title)
        .toLowerCase()
        .includes(searchContent.toLowerCase())
    );
    this.setState({
      books: filteredBooks
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header findContent={this.findContent} />
        <Books
          books={
            this.state.books.length === 0
              ? this.state.initialBooks
              : this.state.books
          }
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
