import { call } from "redux-saga/effects";
import {
  requestAuthFetchme,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-requests";
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
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleAuthFetchMe({ payload }) {
  try {
    // console.log(payload);
    const response = yield call(requestAuthFetchme, payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
