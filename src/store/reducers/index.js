import { combineReducers } from "redux";
import thingsReducer from "./thingsReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
  thingsReducer: thingsReducer,
  authReducer: authReducer,

});

export default rootReducer;
