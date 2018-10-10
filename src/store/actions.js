import { createActions } from "redux-arc";
import { moviesByPage } from "./middlewares";

export const movie = createActions("movie", {
  search: { url: "search/movie", method: "GET" },
  // endpoints 'movies/[popular, top, etc]'
  loadMovies: { url: "movie/:path", method: "GET" },
  loadDetails: { url: "movie/:id", method: "GET" }
});
