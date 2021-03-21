import {call, put, takeEvery} from "@redux-saga/core/effects";
import {serverCard} from "../api";
import { PROFILE, saved} from "../actions";

export  const card = function*(action) {
  try{
    const {cardNumber, expiryDate, cardName, cvc, token} = action.payload
    const data = yield call(serverCard, cardNumber, expiryDate, cardName, cvc, token)
    if (data) {
      localStorage.setItem("token", data.token)
      yield put(saved())
    }
  } catch (e) {
    console.log(e)
  }
}

export const paymentSaga = function*() {
  yield takeEvery(PROFILE, card);
};
