export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SAVE = 'SAVE'
export const AUTHENTICATE = 'AUTHENTICATE'
export const PROFILE = 'PROFILE'

export const logIn = () => ({
  type: LOG_IN
})
export const logOut = () => ({
  type: LOG_OUT
})
export const saved = () => ({
  type: SAVE
})
export const authenticate = (email, password) => ({
  type: AUTHENTICATE, payload: {email, password}
})
export const card = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: PROFILE, payload: {cardNumber, expiryDate, cardName, cvc, token}
})
