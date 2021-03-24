import {ADDRESS_LIST, ADDRESS_LIST_REQUEST} from "../actions";

const initialState = {
  addressList: {},
  isLoading: true
}

export const addressList = (state = initialState, action) => {
  switch (action.type) {
    case ADDRESS_LIST:
      return {...state, addressList: action.addresses, isLoading: false}
    case ADDRESS_LIST_REQUEST:
      return {...state, isLoading: true}


    default:
      return state
  }
}
