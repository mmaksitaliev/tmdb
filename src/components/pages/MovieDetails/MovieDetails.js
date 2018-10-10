import React, { Component } from "react";

export default class MovieDetails extends Component {
  componentDidMount = () => {
    const { pathname } = this.props.location;
    const id = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (Number(id)) {
      console.log(id);
    }
  };

  render() {
    return <div>Movie Details</div>;
  }
}
