/* TRENDING, UPCOMING, TOP RATED MOVIES REDUCER */

import { createReducer } from "./index";
import { LOAD_MOVIES_REQUEST, LOAD_MOVIES_RESPONSE } from "../actions";

const INITIAL_STATE = {
  movies: [],
  loading: false,
  error: null
};

const onRequest = (state, action) => {
  return {
    ...state,
    movies: INITIAL_STATE.movies,
    loading: true
  };
};

const onResponse = (state, { movies, error }) => {
  movies = movies.map(m => ({
    id: m.id,
    title: m.title,
    image: m.poster_path,
    year: m.release_date
  }));
  if (movies.page > 1) movies = state.movies.concat(movies);
  return {
    movies,
    loading: INITIAL_STATE.loading,
    error: error
  };
};

const HANDLERS = {
  [LOAD_MOVIES_REQUEST]: onRequest,
  [LOAD_MOVIES_RESPONSE]: onResponse
};

export default createReducer(INITIAL_STATE, HANDLERS);
