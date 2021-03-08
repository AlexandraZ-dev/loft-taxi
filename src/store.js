import rootReducer from './reducers'
import {createStore, applyMiddleware} from "redux";
import {authMiddleware} from "./authMiddleware";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware))
