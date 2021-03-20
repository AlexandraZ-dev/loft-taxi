import { SAVE} from "../actions";

const initialState = {
  isSaved: false,
}

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {...state, isSaved: true}
    default:
      return state
  }
}
