import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { reducer } from "./reducers";
const sagaMiddleware = createSagaMiddleware();
console.log(reducer);
export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});
// sagaMiddleware.run(rootSaga);
