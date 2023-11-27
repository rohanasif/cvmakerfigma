import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginReducer, signUpReducer, usersReducer } from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
  users: usersReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
