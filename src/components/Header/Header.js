import React, { Component } from "react";
import Search from "./Search";
import UserMenu from "./User";
import "./index.css"

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Search />
        <UserMenu />
      </div>
    );
  }
}
