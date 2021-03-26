import {call, put, takeEvery} from "@redux-saga/core/effects";
import { serverRoute} from "../api";
import {GET_ROUTE, ROUTE_LIST} from "../actions";

export const route = function*(action) {
  try{
    const {address1, address2} = action.payload
    const data = yield call(serverRoute, address1, address2)
    if (data.length > 0) {
      yield put({type: ROUTE_LIST, coord: data})
    }
  } catch (e) {
    console.log(e)
  }
}

export const routeSaga = function*() {
  yield takeEvery(GET_ROUTE, route);
};
