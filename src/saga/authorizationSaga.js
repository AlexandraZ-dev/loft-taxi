import {serverLogin} from "../api";
import {call,  put,  takeEvery} from "@redux-saga/core/effects";
import {address, AUTHENTICATE, logIn} from "../actions";

export  const auth = function*(action) {
  try{
    const {email, password} = action.payload
    const data = yield call(serverLogin, email, password)
    if (data) {
      localStorage.setItem("token", data.token)
      yield put(logIn())
      yield put(address())
    }
  } catch (e) {
    console.log(e)
  }
}

export const authorizationSaga = function*() {
  yield takeEvery(AUTHENTICATE, auth);
};
