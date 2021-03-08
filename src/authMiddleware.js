import {AUTHENTICATE, logIn} from "./actions";
import {serverLogin} from "./api";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload
    const success = await serverLogin(email, password)
    console.log(success);
    if (success === 'success') {
      store.dispatch(logIn())
    } else {
      next(action)
    }
  }
}
