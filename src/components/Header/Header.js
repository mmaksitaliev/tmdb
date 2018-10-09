import React, { Component } from "react";
import Search from "./Search";
import UserMenu from "./User";

import { connect } from "react-redux";
import { movie } from "../../store/actions";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Search onSearchClick={this.props.onSearchClick} />
        <UserMenu />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.search.movies
});

const mapDispatchToProps = {
  onSearchClick: e => movie.creators.search({ query: e.target.value || "Fight club" })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
