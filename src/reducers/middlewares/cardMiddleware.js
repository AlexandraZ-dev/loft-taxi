import { PROFILE, SAVE} from "../../actions";
import {serverCard} from "../../api";

export const cardMiddleware = (store) => (next) => async (action) => {
  if (action.type === PROFILE) {
    const {cardNumber, expiryDate, cardName, cvc, token} = action.payload
     const data = await serverCard(cardNumber, expiryDate, cardName, cvc, token)
    if (data.success) {
      store.dispatch({type: SAVE})
    }
  }
  next(action)
}

