import React from "react";

import Logo from "../../img/logo.png";
import "./Header.css";

// search function from https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/ (quite altered)
const findContent = () => {
  /*let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  const indexedTitle = document.getElementsByClassName("indexedTitle");
  const indexedDesc = document.getElementsByClassName("indexedDesc");
  const flipCards = document.getElementsByClassName("flip-card");

  for (let i = 0; i < indexedTitle.length; i++) {
    const indexedContent = indexedTitle[i].innerHTML + indexedDesc[i].innerHTML;
    if (!indexedContent.toLowerCase().includes(input)) {
      flipCards[i].style.display = "none";
    } else {
      flipCards[i].style.display = "block";
    }
  }*/
  console.log("findContent() (search function)");
};

function Header() {
  return (
    <header>
      <div className="container-header">
        <div className="logo item">
          <img src={Logo} alt="Ubiqum Books Logo" />
        </div>
        <div className="search item">
          <label htmlFor="searchbar">search: </label>
          <input
            id="searchbar"
            onKeyUp={findContent()}
            type="text"
            name="search"
            placeholder="type.."
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
