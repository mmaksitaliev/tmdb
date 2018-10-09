import React from "react";
import Card from "../Card";

export default props => {
  const { title, year, image } = props;
  return (
    <div className="movie">
      <Card>
        <img
          src={`https://image.tmdb.org/t/p/w300${image}`}
          alt={`${title}`}
          className="movie__image"
        />
      </Card>
      <div className="movie__details">
        <h4 className="movie__title mb-1">{title}</h4>
        <h4 className="movie__year">{year}</h4>
      </div>
    </div>
  );
};
