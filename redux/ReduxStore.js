import { configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import Reducers from "./reducers";

const store = configureStore({
  reducer: Reducers,
  middleware: [ReduxThunk],
});

export default store;

// import { applyMiddleware, createStore } from "redux";
// import ReduxThunk from "redux-thunk";
// import { composeWithDevTools } from "remote-redux-devtools";
// import Reducers from "./reducers";

// const store = createStore(
//   Reducers,
//   composeWithDevTools({ realtime: true, port: 8081 })(
//     applyMiddleware(ReduxThunk)
//   )
// );

// export default store;
