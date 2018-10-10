import { combineReducers } from "redux";

import movie from "./movie";
import search from "./movieSearch";
import details from "./details";

export default combineReducers({
  movie, search, details
});
