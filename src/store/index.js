import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { fetchThings } from "./actions/thingsActions";
import { fetchTreasuer } from "./actions/treasurerActions";
import { checkForToken } from "./actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// Treasuer
store.dispatch(fetchThings());
store.dispatch(fetchTreasuer());
store.dispatch(checkForToken());


export default store;
