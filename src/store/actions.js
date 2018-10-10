import { createActions } from "redux-arc";
import { moviesByPage } from "./middlewares";

export const movie = createActions("movie", {
  search: { url: "search/movie", method: "GET" },
  // next used for loading popular, trending movies
  loadMovies: { url: "movie", method: "GET", middlewares: [moviesByPage] },
});
