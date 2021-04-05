import { createStore } from "redux";
import { appReducer } from "./Reducers/appReducer";
import { menuReducer } from "./Reducers/menuReducer";
import { postReducer } from "./Reducers/postReducer";
import { combineReducers } from "redux";

const store = createStore(
  combineReducers({ appReducer, menuReducer, postReducer })
);

export { store };
