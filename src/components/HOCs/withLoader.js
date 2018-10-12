import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export const withLoader = Component => {
  class WithLoader extends React.Component {
    componentDidMount = () => {
      this.props.loader(this.props);
    };

    render() {
      const { loading } = this.props;

      if (loading) return <h1>Loading</h1>;

      return <Component {...this.props} />;
    }
  }

  WithLoader.displayName = WithLoader.name;

  return WithLoader;
};

const connectedHocWithLoader = (mapStateToProps, mapDispatchToProps) => {
  return compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    ),
    withRouter,
    withLoader
  );
};

export default connectedHocWithLoader;
