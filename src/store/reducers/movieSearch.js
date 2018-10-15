import { createReducer } from "./index";
import { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_RESPONSE } from "../actions";

const INITIAL_STATE = {
  movies: [],
  isLoading: false
};

const onSearchRequest = (state, action) => {
  return {
    ...state,
    isLoading: true
  };
};

const onSearchResponse = (state, { movies }) => {
  movies = state.movies.concat(movies);
  return {
    ...state,
    movies,
    isLoading: false
  };
};

const HANDLERS = {
  [SEARCH_MOVIES_REQUEST]: onSearchRequest,
  [SEARCH_MOVIES_RESPONSE]: onSearchResponse
};

export default createReducer(INITIAL_STATE, HANDLERS);
