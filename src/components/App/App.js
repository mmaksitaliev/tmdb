import React, { Component } from "react";
import "./App.css";

import { search } from "../../api";

class App extends Component {
  input = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    let query = this.input.current.value;
    search.movie(query).then(res => console.log(res));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.input} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default App;
