import req from "./requester";

const BASE = "https://api.themoviedb.org/3";
// const IMAGE_URL = "https://image.tmdb.org/t/p";

const KEY = "b7400f90748b0c2c6499db6b6752c9bd";

export default (method, url, params) => {
  return req({ method, url: `${BASE}/${url}`, data: { ...params, api_key: KEY } });
};
