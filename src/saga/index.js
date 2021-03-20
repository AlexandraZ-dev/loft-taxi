import {serverLogin} from "../api";
import {call, all, takeEvery, put, fork} from "@redux-saga/core/effects";
import {AUTHENTICATE, logIn} from "../actions";


export  const auth = function*(action) {
  try{
    const {email, password} = action.payload
    const data = yield call(serverLogin, email, password)
    console.log(data);
    if (data) {
      localStorage.setItem("token", data.token)
      yield  put(logIn())

    }
  } catch (e) {
    console.log(e)
  }

}

export const authSaga = function*() {
  yield takeEvery(AUTHENTICATE, auth);
};

export default function* rootSaga() {
  yield all([
    fork(authSaga)
  ]);
}
