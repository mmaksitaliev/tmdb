import React from "react";
import { NavLink } from "react-router-dom";

export default props => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <NavLink to="/collection" className="sidebar__link" activeClassName="active">
            My Collection
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/trending" className="sidebar__link"  activeClassName="active">
            Trending Movies
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/search" className="sidebar__link"  activeClassName="active">
            Search
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
