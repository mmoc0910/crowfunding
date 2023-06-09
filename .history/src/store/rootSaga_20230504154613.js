import { fork } from "redux-saga/effects";
import { authSaga } from "./auth/auth-saga";

export default function* rootSaga() {
  yield fork(authSaga);
}
