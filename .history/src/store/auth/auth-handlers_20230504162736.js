import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth-requests";

export function* handlerAuthRegister({ type, payload }) {
  try {
    const response = yield call(requestAuthRegister, payload);
  } catch (error) {}
}
