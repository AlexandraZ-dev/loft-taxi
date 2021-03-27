export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SAVE = 'SAVE'
export const PAYMENT = 'PAYMENT'
export const NOT_SAVE = 'NOT_SAVE'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REGISTRATION = 'REGISTRATION'
export const PROFILE = 'PROFILE'
export const ADDRESS_LIST = 'ADDRESS_LIST'
export const ADDRESS_LIST_REQUEST = 'ADDRESS_LIST_REQUEST'
export const PAYMENT_REQUEST = 'PAYMENT_REQUEST'
export const NOT_PROFILE = 'NOT_PROFILE'
export const HAVE_PROFILE = 'HAVE_PROFILE'
export const SAVE_PROFILE = 'SAVE_PROFILE'
export const GET_ROUTE = 'GET_ROUTE'
export const ROUTE_LIST = 'ROUTE_LIST'
export const NEW_ORDER_TAXI = 'NEW_ORDER_TAXI'


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
export const paymentDataRequest = (token) => ({
  type: PAYMENT_REQUEST, payload: { token}
})
export const haveProfile = (profile) => ({
  type: HAVE_PROFILE, payload: {profile}
})
export const profileSaved = () => ({
  type: SAVE_PROFILE
})
export const getRoute = (address1, address2) => ({
  type: GET_ROUTE, payload: {address1, address2}
})
export const newOrderTaxi = () => ({
  type: NEW_ORDER_TAXI
})
