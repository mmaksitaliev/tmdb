import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <Link to="/collection" className="sidebar__link">
            My Collection
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="/trending" className="sidebar__link">
            Trending Movies
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="/search" className="sidebar__link">
            History
          </Link>
        </li>
      </ul>
    </div>
  );
};
