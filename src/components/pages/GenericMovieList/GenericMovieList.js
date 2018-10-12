import React, { Component } from "react";
import { Link } from "react-router-dom";

import Movie from "../../Movie";
import { movie } from "../../../store/actions";
import connectWithLoaderHoc from "../../HOCs/withLoader";

const mapper = { popular: "popular", upcoming: "upcoming", top: "top_rated" };

export default class GenericMovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        {movies.map(movie => (
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <Movie {...movie} />
          </Link>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies,
  loading: state.movie.loading
});

const mapDispatchToProps = {
  loader: props => {
    let { path } = props.match;
    path = path.substring(1);

    return movie.creators.loadMovies(null, { path: mapper[path] });
  }
};

export const ConnectedGenericMovieList = connectWithLoaderHoc(mapStateToProps, mapDispatchToProps)(
  GenericMovieList
);
