import React from "react";
import IconButton from "../../IconButton"

export default props => {
  return (
    <div className="header__search">
      <IconButton>
      <i className="header__icon fa fa-search" />
      </IconButton>
      <input type="text" className="header__input" placeholder="Search movies, actors, etc"/>
    </div>
  );
};
