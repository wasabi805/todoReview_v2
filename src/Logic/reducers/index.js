import { combineReducers } from "redux";
import navigationReducer from "./navigation-reducer";
import heroReducer from './hero-reducer'

export default combineReducers({
  navigationReducer: navigationReducer,
  heroReducer : heroReducer
});
