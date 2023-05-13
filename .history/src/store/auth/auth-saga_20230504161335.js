import { takeLatest } from "redux-saga/effects";
import { register } from "./auth-slice";
import { handlerAuthRegister } from "./auth-handlers";

export function* authSaga() {
  yield takeLatest(register.type, handlerAuthRegister);
}
