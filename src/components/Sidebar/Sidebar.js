import React from "react";
import { NavLink } from "react-router-dom";

export default ({ links }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {links.map(({ path, linkLabel }) => (
          <li key={path} className="sidebar__list-item">
            <NavLink
              to={path}
              children={linkLabel}
              className="sidebar__link"
              activeClassName="active"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
