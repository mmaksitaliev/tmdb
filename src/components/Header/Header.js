import React from "react";
import Search from "./Search";
import UserMenu from "./User";

const Header = props => {
  return (
    <div className="header">
      <Search onSearchClick={props.onSearchClick} />
      <UserMenu />
    </div>
  );
};

export default Header;
