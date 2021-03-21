import {NOT_SAVE, SAVE} from "../actions";

const initialState = {
  isSaved: false,
}

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {...state, isSaved: true}
    case NOT_SAVE:
      return {...state, isSaved: false}
    default:
      return state
  }
}
