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

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/zyv02")
      .then(response =>
        response.data.books.map((book, index) => {
          book.id = index;
          return book;
        })
      )
      .then(response => this.setState({ initialBooks: response }))
      .then(placeholder => this.setState({ books: this.state.initialBooks }));
  }

  findContent = searchContent => {
    console.log(searchContent);
    const filteredBooks = this.state.initialBooks.filter(book =>
      (book.description + book.title)
        .toLowerCase()
        .includes(searchContent.toLowerCase())
    );
    console.log(filteredBooks);
    this.setState({
      books: filteredBooks.map((book, index) => {
        book.id = index;
        return book;
      })
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
