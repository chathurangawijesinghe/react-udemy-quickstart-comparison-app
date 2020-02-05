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
        <div>
          <div>
            <Link to="/">Home</Link> | 
            <Link to="/account">Account</Link> | 
            <Link to="/blog">Blog</Link>
          </div>
          <hr />
          <Route exact path="/" component={User}></Route>
          <Route path="/account" component={Account}></Route>
          <Route path="/blog" component={Blog}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
