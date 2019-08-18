import { connect } from "react-redux";
import Presenter from "./hero-presenter";
import { timSampleAction } from "../../Logic/actions/sample-actions";

const mapStateToProps = state => {
  let { heroHeader } = state.heroReducer;

  return {
    heroHeader: heroHeader
  };
};

const Container = connect( mapStateToProps, { timSampleAction ,  })(Presenter);

export default Container;
