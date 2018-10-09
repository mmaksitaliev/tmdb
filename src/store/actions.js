import { createActions } from "redux-arc";

export const movie = createActions("movie", {
  search: { url: "search/movie", method: "GET" }
});
