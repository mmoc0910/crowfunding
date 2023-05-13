import { takeLatest } from "redux-saga/effects";
import { register } from "./auth-slice";
import { handlerAuthRegister } from "./auth-handlers";

export function* authSaga() {
  console.log("pk");
  yield takeLatest(register.type, handlerAuthRegister);
}
