import React, { Component } from "react";

import "./Book.css";

export class Book extends Component {
  previous = this.props.book.id - 1;
  next = this.props.book.id + 1;

  render() {
    return (
      <React.Fragment>
        <div className="flip-card item">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={this.props.book.cover}
                alt="Book Cover"
                width="220"
                height="314.19"
              />
            </div>
            <div className="flip-card-back">
              <div className="book-info">
                <p className="title">{this.props.book.title}</p>
                <p className="desc">{this.props.book.description}</p>
                <p>
                  <a className="button" href={"#img" + this.props.book.id}>
                    Large Cover
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lightbox animate" id={"img" + this.props.book.id}>
          <a className="lightboxClose" href="#!">
            <span> {"X"} </span>
          </a>
          <a className="lightboxPrev" href={"#img" + this.previous}>
            <span> {"<"} </span>
          </a>
          <a className="lightboxNext" href={"#img" + this.next}>
            <span> {">"} </span>
          </a>
          <img
            className="animate"
            src={this.props.book.detail}
            alt={this.props.book.title}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Book;
