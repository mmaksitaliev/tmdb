import React, { Component } from "react";
import { connect } from "react-redux";
import { movie } from "../../../store/actions";

class MovieDetails extends Component {
  componentDidMount = () => {
    const { pathname } = this.props.location;
    const id = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (Number(id)) {
      this.props.load(null, { id });
    }
  };

  render() {
    return (
      <div>
        Movie Details <p>{JSON.stringify(this.props.movie)}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.details.details
});

const mapDispatchToProps = {
  load: movie.creators.loadDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
