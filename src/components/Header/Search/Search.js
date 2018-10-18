import React from "react";
import IconButton from "components/IconButton";

export default props => {
  return (
    <div className="header__search">
      <IconButton className="header__icon" onClick={props.onSearchClick}>
        <i className="fa fa-search" />
      </IconButton>
      <input type="text" className="header__input" placeholder="Search movies, actors, etc" />
    </div>
  );
};
