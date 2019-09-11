import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.scss";
import { Provider } from "react-redux";
import store from "./store";


import App from "./Components/App";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , document.getElementById("root"));
