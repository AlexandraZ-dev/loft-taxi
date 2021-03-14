import {LOG_OUT, LOG_IN} from "../actions";

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
      return {isLoggedIn: false}
    default:
      return state
  }
}
