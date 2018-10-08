import React, { Component } from "react";
import "./App.css";

import { search } from "../../api";
import Header from "../Header";
import Sidebar from "../Sidebar";

class App extends Component {
  input = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    let query = this.input.current.value;
    search.movie(query).then(res => console.log(res));
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Sidebar />

      </div>
    );
  }
}

export default App;
