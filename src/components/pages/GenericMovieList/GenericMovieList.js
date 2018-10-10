import React, { Component } from "react";
import Movie from "../../Movie";
import { connect } from "react-redux";
import { movie } from "../../../store/actions";

const mapper = { popular: "popular", upcoming: "upcoming", top: "top_rated" };

class GenericMovieList extends Component {
  componentDidMount = () => {
    let { path } = this.props.match;
    path = path.substring(1);

    this.props.load({path: mapper[path]});
  };

  render() {
    const { movies } = this.props;
    return (
      <>
        {movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies
});

const mapDispatchToProps = {
  load: movie.creators.loadMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericMovieList);
