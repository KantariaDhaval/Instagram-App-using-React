import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";
import logger from "redux-logger";

const myLogger = (store) => (next) => (action) => {
  console.log("Logged actions: ", action);
  next(action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myLogger, logger),
});

store.subscribe(() => {
  console.log("Store updated: ", store.getState());
});

export { store };
