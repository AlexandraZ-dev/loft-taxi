import {serverAddressList} from "../api";
import {call, put, takeEvery} from "@redux-saga/core/effects";
import {ADDRESS_LIST_REQUEST, ADDRESS_LIST} from "../actions";

export const addressList = function*(action) {
  try{
    const addresses =  yield call(serverAddressList)
    yield put({
      type:ADDRESS_LIST,
      addresses: addresses.addresses
    })

  } catch (e) {
    console.log(e)
  }
}

export const addressListSaga = function*() {
  yield takeEvery(ADDRESS_LIST_REQUEST, addressList);
};
