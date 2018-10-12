import { createActions } from "redux-arc";

export const movie = createActions("movie", {
  search: { url: "search/movie", method: "GET" },
  // endpoints 'movies/[popular, top, etc]'
  loadMovies: { url: "movie/:path", method: "GET" },
  loadDetails: { url: "movie/:id", method: "GET" }
});
