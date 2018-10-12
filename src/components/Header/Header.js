import React from "react";
import Search from "./Search";
import UserMenu from "./User";

import { connect } from "react-redux";
import { movie } from "../../store/actions";

const Header = props => {
  return (
    <div className="header">
      <Search onSearchClick={props.onSearchClick} />
      <UserMenu />
    </div>
  );
};

const mapDispatchToProps = {
  onSearchClick: e => movie.creators.search({ query: e.target.value || "Fight club" })
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
