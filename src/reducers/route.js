import {  ROUTE_LIST} from "../actions";

const initialState = {
  coord: []
}

export const route = (state = initialState, action) => {
  switch (action.type) {
    case ROUTE_LIST:
      return {...state, coord: action.coord}
    default:
      return state
  }
}
