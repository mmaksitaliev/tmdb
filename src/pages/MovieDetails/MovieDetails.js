import React, { Component } from "react";
import connectWithLoaderHoc from "components/HOCs/withLoader";
import { loadDetails } from "store/actions";

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

const enhancedWithLoader = connectWithLoaderHoc(
  ({ details }) => ({
    loading: details.loading,
    movie: details.details
  }),
  {
    loader: props => {
      const { pathname } = props.location;
      const id = pathname.substring(pathname.lastIndexOf("/") + 1);

      return loadDetails(id);
    }
  }
);

export const ConnectedMovieDetails = enhancedWithLoader(MovieDetails);
