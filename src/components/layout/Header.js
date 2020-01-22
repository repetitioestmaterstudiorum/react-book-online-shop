import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <div class="container-header">
        <div class="logo item">
          <img src="./img/logo.png" alt="Ubiqum Books Logo" />
        </div>
        <div class="search item">
          <label for="searchbar">search: </label>
          <input
            id="searchbar"
            onkeyup="findContent()"
            type="text"
            name="search"
            placeholder="type.."
          />
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default Header;
