import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Collection from "../pages/Collection";
import Trending from "../pages/Trending";
import Search from "../pages/Search";

const routes = [
  { path: "/trending", component: Trending, exact: true, linkLabel: "Trending Movies" },
  { path: "/upcoming", component: Content, exact: true, linkLabel: "Upcoming" },
  { path: "/top", component: Content, exact: true, linkLabel: "Top Rated" },
  { path: "/genres", component: Content, exact: true, linkLabel: "Genres" },
  { path: "/collection", component: Collection, exact: true, linkLabel: "My Collection" },
  { path: "/search", component: Search, exact: true, linkLabel: "Search" }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Sidebar links={routes} />
          <div className="content">
            <Switch>
              {routes.map(({ path, component, exact }) => (
                <Route key={path} exact={exact} path={path} component={component} />
              ))}

              <Redirect from="*" to="/trending" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
