import { combineReducers } from "redux";
import authReducer from './authReducer'
import countReducer from "./countReducer";

const rootReducer = combineReducers({authReducer, countReducer})


export default rootReducer