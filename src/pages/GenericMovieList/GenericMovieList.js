import React from "react";
import { Link } from "react-router-dom";

import Movie from "components/Movie";
import { loadMovies } from "store/actions";
import connectWithLoaderHoc from "components/HOCs/withLoader";

const mapper = { popular: "popular", upcoming: "upcoming", top: "top_rated" };

const GenericMovieList = ({ movies }) => {
  return movies.map(movie => (
    <Link key={movie.id} to={`/details/${movie.id}`}>
      <Movie {...movie} />
    </Link>
  ));
};

const mapStateToProps = state => ({
  movies: state.movie.movies,
  loading: state.movie.loading
});

const mapDispatchToProps = {
  loader: props => {
    let { path } = props.match;
    path = path.substring(1);

    return loadMovies(mapper[path]);
  }
};

export default GenericMovieList;

export const ConnectedGenericMovieList = connectWithLoaderHoc(mapStateToProps, mapDispatchToProps)(
  GenericMovieList
);
