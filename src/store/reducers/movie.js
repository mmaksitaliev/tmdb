/* TRENDING, UPCOMING, TOP RATED MOVIES REDUCER */

import { createReducers } from "redux-arc";
import { movie } from "../actions";

const INITIAL_STATE = {
  movies: [],
  loading: false,
  error: null
};

const onRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true
  };
};

const onResponse = (state = INITIAL_STATE, { payload, error }) => {
  let movies = payload.results.map(m => ({
    id: m.id,
    title: m.title,
    image: m.poster_path,
    year: m.release_date
  }));
  if (payload.page > 1) movies = state.movies.concat(movies);
  return {
    movies,
    loading: INITIAL_STATE.loading,
    error: error
  };
};

const HANDLERS = {
  [movie.types.TRENDING.REQUEST]: onRequest,
  [movie.types.TRENDING.RESPONSE]: onResponse
};

export default createReducers(INITIAL_STATE, HANDLERS);
