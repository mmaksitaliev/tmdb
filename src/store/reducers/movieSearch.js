import { createReducers } from "redux-arc";
import { movie } from "../actions";

const INITIAL_STATE = {
  movies: [],
  isLoading: false
};

const onSearchRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: true
  };
};

const onSearchResponse = (state = INITIAL_STATE, { payload }) => {
  let movies = state.movies.concat(payload.results);
  return {
    ...state,
    movies,
    isLoading: false
  };
};


const HANDLERS = {
  [movie.types.SEARCH.REQUEST]: onSearchRequest,
  [movie.types.SEARCH.RESPONSE]: onSearchResponse
};

export default createReducers(INITIAL_STATE, HANDLERS);
