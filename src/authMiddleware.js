import {AUTHENTICATE, LOG_IN} from "./actions";
import { serverLogin} from "./api";

export const authMiddleware = (store) => (next) => async (action) => {

  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload
    const data = await serverLogin(email, password)
    if (data.success) {
      localStorage.setItem("token", data.token)
      store.dispatch({type: LOG_IN, payload: data.token})
    }
  }
  next(action)
}
