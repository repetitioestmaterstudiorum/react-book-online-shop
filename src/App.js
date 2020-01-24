import React, { Component } from "react";
import Header from "./components/layout/Header";
import Books from "./components/Books";
import Footer from "./components/layout/Footer";

import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    books: []
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
      .then(
        response => (
          this.setState({ books: response }), (this.onloadState = this.state)
        )
      );
  }

  findContent = searchContent => {
    this.state = this.onloadState;
    this.setState({
      books: this.state.books.filter(book =>
        book.title.toLowerCase().includes(searchContent.toLowerCase())
      )
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header findContent={this.findContent} />
        <Books books={this.state.books} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
