import { createActions } from "redux-arc";
import request from "../api";

export const LOAD_MOVIES_REQUEST = "LOAD_MOVIES_REQUEST";
export const LOAD_MOVIES_RESPONSE = "LOAD_MOVIES_RESPONSE";

export const LOAD_DETAILS_REQUEST = "LOAD_DETAILS_REQUEST";
export const LOAD_DETAILS_RESPONSE = "LOAD_DETAILS_RESPONSE";

export const movie = createActions("movie", {
  search: { url: "search/movie", method: "GET" },
  // endpoints 'movies/[popular, top, etc]'
  loadMovies: { url: "movie/:path", method: "GET" },
  loadDetails: { url: "movie/:id", method: "GET" }
});

const loadMoviesRequest = () => ({
  type: LOAD_MOVIES_REQUEST
});

const loadMoviesResponse = movies => ({
  type: LOAD_MOVIES_RESPONSE,
  movies
});

const loadDetailsRequest = () => ({
  type: LOAD_DETAILS_REQUEST
});

const loadDetailsResponse = details => ({
  type: LOAD_DETAILS_RESPONSE,
  details
});

export const loadMovies = collectionName => dispatch => {
  dispatch(loadMoviesRequest());

  request("GET", `movie/${collectionName}`).then(json =>
    dispatch(loadMoviesResponse(json.results))
  );
};

export const loadDetails = id => dispatch => {
  dispatch(loadDetailsRequest());

  request("GET", `movie/${id}`).then(json => dispatch(loadDetailsResponse(json)));
};
