import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/Fib">Fib</Link>
      <Link to="/otherpage">Other Page</Link>
    </header>
  );
}

export default Home;
