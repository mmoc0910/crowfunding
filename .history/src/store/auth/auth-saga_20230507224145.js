import { takeLatest } from "redux-saga/effects";
import { login, register } from "./auth-slice";
import { handleAuthLogin, handlerAuthRegister } from "./auth-handlers";

export function* authSaga() {
  yield takeLatest(register.type, handlerAuthRegister);
  yield takeLatest(login.type, handleAuthLogin);
}
