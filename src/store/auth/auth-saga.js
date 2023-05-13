import { takeLatest } from "redux-saga/effects";
import { login, logout, refreshToken, register } from "./auth-slice";
import {
  handleAuthLogOut,
  handleAuthLogin,
  handleAuthRefreshToken,
  handlerAuthRegister,
} from "./auth-handlers";

export function* authSaga() {
  yield takeLatest(register.type, handlerAuthRegister);
  yield takeLatest(login.type, handleAuthLogin);
  yield takeLatest(refreshToken.type, handleAuthRefreshToken);
  yield takeLatest(logout.type, handleAuthLogOut);
}
