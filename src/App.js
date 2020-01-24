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
      <React.Fragment>
        <Header />
        <Books books={this.state.books} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
