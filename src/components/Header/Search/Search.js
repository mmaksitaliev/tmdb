import React, { Component } from "react";
import IconButton from "components/IconButton";

export default class Search extends Component {
  state = { searchField: "" };

  onChange = e => {
    this.setState({ searchField: e.target.value });
  };

  handleClick = e => {
    this.props.onSearchClick(this.state.searchField);
  };

  render() {
    return (
      <div className="header__search">
        <IconButton className="header__icon" onClick={this.handleClick}>
          <i className="fa fa-search" />
        </IconButton>
        <input
          type="text"
          className="header__input"
          placeholder="Search movies, actors, etc"
          value={this.state.searchField}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
