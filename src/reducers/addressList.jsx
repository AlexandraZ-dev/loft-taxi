import {ADDRESS_LIST} from "../actions";

const initialState = {
  addressList: {},
}

export const addressList = (state = initialState, action) => {
  switch (action.type) {
    case ADDRESS_LIST:
      return {...state, addressList: action.payload.addresses}

    default:
      return state
  }
}
