import { createStore, combineReducers, applyMiddleware } from "redux";
import {} from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { signUpReducer } from "./reducers";

const rootReducer = combineReducers({
  signUp: signUpReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
