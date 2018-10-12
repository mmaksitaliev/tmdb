import React, { Component } from "react";
import connectedHocWithLoader, { withLoader } from "../../HOCs/withLoader";
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

const enhancedWithLoader = connectedHocWithLoader(
  ({ details }) => ({
    loading: details.loading,
    movie: details.details
  }),
  {
    loader: props => {
      const { pathname } = props.location;
      const id = pathname.substring(pathname.lastIndexOf("/") + 1);

      return movie.creators.loadDetails(null, { id });
    }
  }
);

export const ConnectedMovieDetails = enhancedWithLoader(MovieDetails);
