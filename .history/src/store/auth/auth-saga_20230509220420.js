import { takeLatest } from "redux-saga/effects";
import { login, refreshToken, register } from "./auth-slice";
import {
  handleAuthLogin,
  handleAuthRefreshToken,
  handlerAuthRegister,
} from "./auth-handlers";

export function* authSaga() {
  yield takeLatest(register.type, handlerAuthRegister);
  yield takeLatest(login.type, handleAuthLogin);
  yield takeLatest(refreshToken.type, handleAuthRefreshToken);
}
