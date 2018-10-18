import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Header from "components/Header";
import Navbar from "components/Navbar";
import Search from "pages/Search";
import { ConnectedGenericMovieList } from "pages/GenericMovieList";
import { ConnectedMovieDetails } from "pages/MovieDetails";

const routes = [
  { path: "/popular", component: ConnectedGenericMovieList, exact: true, label: "Most Popular" },
  { path: "/upcoming", component: ConnectedGenericMovieList, exact: true, label: "Upcoming" },
  { path: "/top", component: ConnectedGenericMovieList, exact: true, label: "Top Rated" },
  { path: "/genres", component: Search, exact: true, label: "Genres" },
  { path: "/discover", component: Search, exact: true, label: "Discover" },

  { path: "/details", component: ConnectedMovieDetails }
];

const home = routes[0];

class App extends Component {
  onlyLinks = link => link.label;

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Navbar links={routes.filter(this.onlyLinks)} />
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
