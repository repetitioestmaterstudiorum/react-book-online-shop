import React from "react";
import Header from "./components/layout/Header";
import Books from "./components/Books";
import Footer from "./components/layout/Footer";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Books />
      <Footer />
    </React.Fragment>
  );
}

export default App;
