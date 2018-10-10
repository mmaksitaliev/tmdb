import React from "react";
import { NavLink } from "react-router-dom";

export default ({ links }) => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        {links.map(({ path, linkLabel }) => (
          <li key={path} className="navbar__list-item">
            <NavLink
              to={path}
              children={linkLabel}
              className="navbar__link"
              activeClassName="active"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
