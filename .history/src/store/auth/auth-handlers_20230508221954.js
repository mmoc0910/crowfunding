import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchme,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-requests";
import { saveToken } from "utils/auth";
import { updateUser } from "./auth-slice";

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
    const response = yield call(requestAuthFetchme, payload);
    console.log(response);
    if (response.status === 200) {
      yield put(
        updateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}
