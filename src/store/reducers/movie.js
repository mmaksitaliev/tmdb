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
  return {
    loading: INITIAL_STATE.loading,
    movies: payload
  };
};

const HANDLERS = {
  [movie.types.SEARCH.REQUEST]: onRequest,
  [movie.types.SEARCH.RESPONSE]: onResponse
};

export default createReducers(INITIAL_STATE, HANDLERS);
