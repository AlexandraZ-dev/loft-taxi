import {serverLogin, serverPaymentData} from "../api";
import {call,  put,  takeEvery} from "@redux-saga/core/effects";
import {addressRequest, AUTHENTICATE, HAVE_PROFILE, logIn} from "../actions";

export  const auth = function*(action) {
  try{
    const {email, password} = action.payload
    const data = yield call(serverLogin, email, password)
    if (data) {
      localStorage.setItem("token", data.token)
      yield put(logIn())
      const token = localStorage.token
      const profile = yield call(serverPaymentData, token)
      if (profile) {
        yield put({
          type:HAVE_PROFILE,
        })
      }
      yield put(addressRequest())
    }
  } catch (e) {
    console.log(e)
  }
}

export const authorizationSaga = function*() {
  yield takeEvery(AUTHENTICATE, auth);
};
