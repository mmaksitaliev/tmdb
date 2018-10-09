import React from "react";
import Card from "../Card";

export default props => {
  return (
    <div>
      <Card>
        <img src="" alt="movie image" className="movie__image" />
      </Card>
      <div className="movie__details">
        <h4 className="movie__title mb-1">Fight club</h4>
        <h4 className="movie__year">1999</h4>
      </div>
    </div>
  );
};
