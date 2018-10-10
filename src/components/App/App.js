import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Header from "../Header";
import Navbar from "../Navbar";
import Search from "../pages/Search";
import GenericMovieList from "../pages/GenericMovieList/GenericMovieList";

const routes = [
  { path: "/popular", component: GenericMovieList, exact: true, linkLabel: "Most Popular" },
  { path: "/upcoming", component: GenericMovieList, exact: true, linkLabel: "Upcoming" },
  { path: "/top", component: GenericMovieList, exact: true, linkLabel: "Top Rated" },
  { path: "/genres", component: Search, exact: true, linkLabel: "Genres" },
  { path: "/discover", component: Search, exact: true, linkLabel: "Discover" }
];
const home = routes[0];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header links={routes} />
          <Navbar links={routes} />
          <div className="content">
            <Switch>
              {routes.map(({ path, component, exact }) => (
                <Route key={path} exact={exact} path={path} component={component} />
              ))}

              <Redirect from="*" to={home.path} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
