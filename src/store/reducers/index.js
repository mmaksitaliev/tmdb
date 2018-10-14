import { combineReducers } from "redux";

import movie from "./movie";
import search from "./movieSearch";
import details from "./details";

export function createReducer(initialState, handlers) {
  return function(state = initialState, action) {
    const reducer = handlers[action.type];
    if (reducer) return reducer(state, action);
    return state;
  };
}

export default combineReducers({
  movie,
  search,
  details
});
