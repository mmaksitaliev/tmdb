import React, { Component } from "react";
import Movie from "../../Movie";
import { connect } from "react-redux";
import { movie } from "../../../store/actions";

class Trending extends Component {
  componentDidMount = () => {
    this.props.loadTrending();
  };

  render() {
    const { movies } = this.props;
    return (
      <>
        {movies.map(movie => (
          <Movie key={movie.id} {...movie}/>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies
});

const mapDispatchToProps = {
  loadTrending: movie.creators.trending
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);
