import { createStore, applyMiddleware } from "redux";
import MainReducer from "./Logic/reducers";
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(
  MainReducer,
  applyMiddleware(...middleware),
);

export default store;


