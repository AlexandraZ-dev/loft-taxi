import {NOT_SAVE, SAVE, HAVE_PROFILE, NOT_PROFILE, SAVE_PROFILE} from "../actions";

const initialState = {
  isSaved: false,
  isProfile: false,
  profile: {
    cardName: "",
    cardNumber: "",
    cvc: "",
    expiryDate: "",
    id: "",
  }
}

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {...state, isSaved: true}
    case NOT_SAVE:
      return {...state, isSaved: false}
    case HAVE_PROFILE:
      return {...state, isProfile: true, profile: action.profile}
    case SAVE_PROFILE:
      return {...state, isProfile: true}
    case NOT_PROFILE:
      return {...state, isProfile: false}
    default:
      return state
  }
}
