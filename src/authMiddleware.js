import {AUTHENTICATE, LOG_IN,} from "./actions";
import {serverLogin} from "./api";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload
    const success = await serverLogin(email, password)
    if (success === 'success') {
      store.dispatch({type: LOG_IN})
    } else {
      next(action)
    }
  }
}
