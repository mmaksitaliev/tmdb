import { createActions } from "redux-arc";

export const movie = createActions("movie", {
  search: { url: "search/movie", method: "GET" },
  // next 3 have common reducers
  trending: { url: "movie/popular", method: "GET" },
  upcoming: { url: "movie/upcoming", method: "GET" },
  top: { url: "movie/top_rated", method: "GET" }
});
