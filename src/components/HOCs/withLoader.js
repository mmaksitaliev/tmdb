import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const getHocWithLoader = (mapStateToProps, mapDispatchToProps) => {
  const withLoader = Component => {
    class WithLoader extends React.Component {
      componentDidMount = () => {
        const { pathname } = this.props.location;
        const id = pathname.substring(pathname.lastIndexOf("/") + 1);

        if (Number(id)) {
          this.props.loader(null, { id });
        }
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

  return compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    ),
    withLoader,
    withRouter
  );
};

export default getHocWithLoader;
