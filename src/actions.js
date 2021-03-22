export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SAVE = 'SAVE'
export const NOT_SAVE = 'NOT_SAVE'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REGISTRATION = 'REGISTRATION'
export const PROFILE = 'PROFILE'
export const ADDRESS_LIST = 'ADDRESS_LIST'
export const ADDRESS_LIST_REQUEST = 'ADDRESS_LIST_REQUEST'

export const logIn = () => ({
  type: LOG_IN
})
export const logOut = () => ({
  type: LOG_OUT
})
export const saved = () => ({
  type: SAVE
})
export const notSaved = () => ({
  type: NOT_SAVE
})
export const authenticate = (email, password) => ({
  type: AUTHENTICATE, payload: {email, password}
})
export const card = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: PROFILE, payload: {cardNumber, expiryDate, cardName, cvc, token}
})
export const register = (email, password, name, surname) => ({
  type: REGISTRATION, payload: {email, password, name, surname}
})
export const addressRequest = () => ({
  type: ADDRESS_LIST_REQUEST
})
export const address = (addresses) => ({
  type: ADDRESS_LIST, payload: {addresses}
})
