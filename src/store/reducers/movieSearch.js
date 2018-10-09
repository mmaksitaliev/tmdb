import { createReducers } from "redux-arc";
import { movie } from "../actions";

const initialState = {
  movies: [],
  isLoading: false
};

const onSearchRequest = (state = initialState, action) => {
  return {
    ...state,
    isLoading: true
  };
};

const onSearchResponse = (state = initialState, { payload }) => {
  let movies = state.movies.concat(payload.results);
  return {
    ...state,
    movies,
    isLoading: false
  };
};

const handlers = {
  [movie.types.SEARCH.REQUEST]: onSearchRequest,
  [movie.types.SEARCH.RESPONSE]: onSearchResponse
};

export default createReducers(initialState, handlers);
