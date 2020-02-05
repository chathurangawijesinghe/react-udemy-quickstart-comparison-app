import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import User from "./components/User";
import Account from "./components/Account";
import Blog from "./components/Blog";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={User}></Route>
        <Route path="/account" component={Account}></Route>
        <Route path="/blog" component={Blog}></Route>
      </Router>
    );
  }
}

export default App;
