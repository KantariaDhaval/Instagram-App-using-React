import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => {
  console.log("Store updated: ", store.getState());
});

export { store };
