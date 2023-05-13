import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAuthRegister } from "./auth-requests";
import { saveToken } from "utils/auth";

export function* handlerAuthRegister({ type, payload }) {
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
  } catch (error) {
    console.log(error);
  }
}
