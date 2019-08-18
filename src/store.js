import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import MainReducer from "./Logic/reducers";

const initialState = {}; //pre-loaded state

const middleware = [thunk];

const store = createStore(
  MainReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
