import { configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import Reducers from "./reducers";

const store = configureStore({
  reducer: Reducers,
  middleware: [ReduxThunk],
});

console.log(store.getState());

export default store;
