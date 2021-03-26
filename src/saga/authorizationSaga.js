import {serverLogin, serverPaymentData} from "../api";
import {call, put, takeEvery} from "@redux-saga/core/effects";
import {addressRequest, AUTHENTICATE, HAVE_PROFILE, logIn} from "../actions";

export const auth = function* (action) {
  try {
    const {email, password} = action.payload
    const data = yield call(serverLogin, email, password)
    if (data) {
      localStorage.setItem("token", data.token)
      yield put(logIn())
      const token = localStorage.token
      const profile = yield call(serverPaymentData, token)
      console.log(profile);
      if (profile) {
        yield put({
          type: HAVE_PROFILE,
          profile: {
            cardName: profile.cardName,
            cardNumber: profile.cardNumber,
            cvc: profile.cvc,
            expiryDate: profile.expiryDate,
            id: profile.id
          }
        })
      }
      yield put(addressRequest())
    }
  } catch (e) {
    console.log(e)
  }
}

export const authorizationSaga = function* () {
  yield takeEvery(AUTHENTICATE, auth);
};
