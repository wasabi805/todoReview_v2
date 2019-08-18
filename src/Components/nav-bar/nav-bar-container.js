import { connect } from "react-redux";
import Presenter from "./nav-bar-presenter";

import { timSampleAction } from "../../Logic/actions/sample-actions";

const mapStateToProps = state => {
  let { nav_names } = state.navigationReducer;

  return {
    nav_names: nav_names
  };
};

const Container = connect(mapStateToProps, { timSampleAction ,  })(Presenter);

export default Container;
