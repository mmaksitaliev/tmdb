import request from "../api";

export const LOAD_MOVIES_REQUEST = "LOAD_MOVIES_REQUEST";
export const LOAD_MOVIES_RESPONSE = "LOAD_MOVIES_RESPONSE";

export const LOAD_DETAILS_REQUEST = "LOAD_DETAILS_REQUEST";
export const LOAD_DETAILS_RESPONSE = "LOAD_DETAILS_RESPONSE";

export const SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST";
export const SEARCH_MOVIES_RESPONSE = "SEARCH_MOVIES_RESPONSE";

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

const searchMoviesRequest = () => ({
  type: SEARCH_MOVIES_REQUEST
});

const searchMoviesResponse = movies => ({
  type: SEARCH_MOVIES_RESPONSE,
  movies
});

export const loadMovies = collectionName => dispatch => {
  dispatch(loadMoviesRequest());

  request("GET", `movie/${collectionName}`).then(response =>
    dispatch(loadMoviesResponse(response.results))
  );
};

export const loadDetails = id => dispatch => {
  dispatch(loadDetailsRequest());

  request("GET", `movie/${id}`).then(response => dispatch(loadDetailsResponse(response)));
};

export const searchMovies = query => dispatch => {
  dispatch(searchMoviesRequest());

  request("GET", "search/movie", { query }).then(response => dispatch(searchMoviesResponse(response.results)));
};
