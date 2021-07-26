import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/Fib" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
