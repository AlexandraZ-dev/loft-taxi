import {combineReducers} from "redux";
import {auth} from "./auth";
import {profile} from "./profile";
import {addressList} from "./addressList";

export default combineReducers({auth, profile, addressList})
