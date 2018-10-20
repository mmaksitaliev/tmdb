import { connect } from "react-redux";
import { searchMovies } from "store/actions";

import Header from "components/Header";

const mapDispatchToProps = {
  onSearchClick: e => searchMovies({ query: e.target.value || "Fight club" })
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
