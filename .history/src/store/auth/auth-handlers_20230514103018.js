import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchme,
  requestAuthLogin,
  requestAuthRegister,
  requestRefeshToken,
} from "./auth-requests";
import { logOut, saveToken } from "utils/auth";
import { updateUser } from "./auth-slice";
import { toast } from "react-toastify";

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
      toast.success("Sign in successfully");
    }
  } catch (error) {
    console.log(error);
    const response = error.response.data;
    toast.error(response);
  }
}

export function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchme, payload);
    // console.log(response);
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

export function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestRefeshToken, payload);
    if (response.status === 200) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleAuthLogOut({ payload }) {
  yield put(
    updateUser({
      user: undefined,
      accessToken: null,
    })
  );
  logOut();
}
