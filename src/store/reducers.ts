import { combineReducers } from "redux";
import { changeA } from "./handleActions";
export default combineReducers({
    a: changeA
})