import React from "react";
import Card from "../Card";

export default props => {
  return (
    <div className="movie">
      <Card>
        <img src="https://image.tmdb.org/t/p/w200/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg" alt="movie image" className="movie__image" />
      </Card>
      <div className="movie__details">
        <h4 className="movie__title mb-1">Fight club</h4>
        <h4 className="movie__year">1999</h4>
      </div>
    </div>
  );
};
