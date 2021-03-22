import {serverRegister} from "../api";
import {call,  put,  takeEvery} from "@redux-saga/core/effects";
import {REGISTRATION, logIn, address} from "../actions";

export const register = function*(action) {
  try{
    const {email, password, name, surname} = action.payload
    const data = yield call(serverRegister, email, password, name, surname)
    if (data) {
      localStorage.setItem("token", data.token)
      yield put(logIn())
      yield put(address())
    }
  } catch (e) {
    console.log(e)
  }
}

export const registrationSaga = function*() {
  yield takeEvery(REGISTRATION, register);
};
