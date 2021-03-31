import {LOG_OUT, LOG_IN} from "../actions";

const initialState = {
  isLoggedIn: false,
  profile: { name: "", date: "", card: "", cvv: "" }
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {...state, isLoggedIn: true}
    case LOG_OUT:
      return {...state, isLoggedIn: false}
    default:
      return state
  }
}
