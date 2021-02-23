import { combineReducers } from "redux";
import thingsReducer from "./thingsReducer";
import treasuerReducer from "./treasurerReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
  thingsReducer: thingsReducer,
  treasuerReducer: treasuerReducer,
  authReducer: authReducer,

});

export default rootReducer;
