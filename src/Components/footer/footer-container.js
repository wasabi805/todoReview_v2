import {connect} from "react-redux";
import Presenter from "./footer-presenter"


const mapStateToProps = state => {
    return {
    };
};

const Container = connect( mapStateToProps)(Presenter);

export default Container;