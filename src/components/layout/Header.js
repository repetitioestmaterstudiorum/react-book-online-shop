import React, { Component } from "react";

import Logo from "../../img/logo.png";
import "./Header.css";

export class Header extends Component {
  handleOnChange = e => {
    this.props.findContent(e.target.value);
  };

  render() {
    return (
      <header>
        <div className="container-header">
          <div className="logo item">
            <a href="/">
              <img src={Logo} alt="Ubiqum Books Logo" />
            </a>
          </div>
          <div className="search item">
            <label htmlFor="searchBar">Find: </label>
            <input
              id="searchBar"
              onChange={this.handleOnChange}
              type="text"
              name="searchBar"
              placeholder="type.."
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
