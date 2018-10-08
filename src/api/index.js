import req from "./requester";

const URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p";

const KEY = "b7400f90748b0c2c6499db6b6752c9bd";

export const search = {
  path: "search",
  movie: function(query) {
    return req.get({ url: `${URL}/${this.path}/movie`, data: { query, api_key: KEY } }).then(res => {
      return res.json();
    });
  }
};
