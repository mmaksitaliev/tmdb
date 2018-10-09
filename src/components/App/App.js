import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Collection from "../pages/Collection";
import Trending from "../pages/Trending";
import Search from "../pages/Search";

const links = [
  { to: "/trending", children: "Trending Movies" },
  { to: "/upcoming", children: "Upcoming" },
  { to: "/top", children: "Top Rated" },
  { to: "/genres", children: "Genres" },
  { to: "/collection", children: "My Collection" },
  { to: "/search", children: "Search" }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Sidebar links={links} />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Content} />
              <Route exact path="/collection" component={Collection} />
              <Route exact path="/trending" component={Trending} />
              <Route exact path="/search" component={Search} />
              <Route render={() => <h1>Page Not Found</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
