import React from "react";
import { NavLink } from "react-router-dom";

export default ({ links }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {links.map(link => (
          <li key={link.to} className="sidebar__list-item">
            <NavLink {...link} className="sidebar__link" activeClassName="active" />
          </li>
        ))}
      </ul>
    </div>
  );
};
