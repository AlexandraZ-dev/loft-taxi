import { ROUTE_LIST,  NEW_ORDER_TAXI} from "../actions";

const initialState = {
  coord: [],
  isOrderSuccess: false

}

export const route = (state = initialState, action) => {
  switch (action.type) {
    case ROUTE_LIST:
      return {...state, coord: action.coord, isOrderSuccess: true}
    case NEW_ORDER_TAXI:
      return {...state, isOrderSuccess: false}
    default:
      return state
  }
}
