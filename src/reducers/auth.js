import {LOG_OUT, LOG_IN, SAVE} from "../actions";

const initialState = {
  isLoggedIn: false,
  isSaved: false,
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {isLoggedIn: true}
    case LOG_OUT:
      return {isLoggedIn: false}
    case SAVE:
      return {isSaved: true}
    default:
      return state
  }
}
