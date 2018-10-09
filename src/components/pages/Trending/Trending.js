import React, { Component } from "react";
import Movie from "../../Movie";

export default class Collection extends Component {
  movies = new Array(8).fill();

  render() {
    return (
      <>
        {this.movies.map(() => (
          <Movie />
        ))}
      </>
    );
  }
}
