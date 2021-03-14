import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers'
import {authMiddleware} from "./reducers/middlewares/authMiddleware";
import {cardMiddleware} from "./reducers/middlewares/cardMiddleware";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, cardMiddleware))
