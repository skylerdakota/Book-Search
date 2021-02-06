import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Nav />
          <Route exact path="/" component={Search} />
          <Route exact path="/about" component={Search} />
          <Route exact path="/contact" component={Saved} />
          <Books />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
