import React, { Component } from "react";
import getHocWithLoader from "../../HOCs/withLoader";
import { movie } from "../../../store/actions";

export default class MovieDetails extends Component {
  render() {
    return (
      <div>
        <h3>
          Movie Details: <p>{JSON.stringify(this.props.movie)}</p>
        </h3>
      </div>
    );
  }
}

const withLoader = getHocWithLoader(
  ({ details }) => ({
    loading: details.loading,
    movie: details.details
  }),
  {
    loader: movie.creators.loadDetails
  }
);

export const MovieDetailsWithLoading = withLoader(MovieDetails);
