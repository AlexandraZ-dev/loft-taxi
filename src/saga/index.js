import {call, all} from "@redux-saga/core/effects";
import {paymentSaga} from "./paymentSaga";
import {authorizationSaga} from "./authorizationSaga";
import {registrationSaga} from "./registrationSaga";
import {addressListSaga} from "./addressListSaga";
import {routeSaga} from "./routeSaga";

export default function* rootSaga() {
  yield all([
    call(authorizationSaga),
    call(paymentSaga),
    call(registrationSaga),
    call(addressListSaga),
    call(routeSaga),
  ]);
}
