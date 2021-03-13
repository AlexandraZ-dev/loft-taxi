import {PROFILE} from "./actions";
import {serverCard} from "./api";

export const cardMiddleware = (store) => (next) => async (action) => {
  if (action.type === PROFILE) {
    const {cardNumber, expiryDate, cardName, cvc, token} = action.payload
    return await serverCard(cardNumber, expiryDate, cardName, cvc, token)
  }
  next(action)
}

