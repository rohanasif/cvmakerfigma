import {
  GET_USERS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  STEP,
} from "../constants";

const initialState = {
  users: [],
  message: "",
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        message: "Registration successful",
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.email === action.payload.email
            ? { ...user, isLoggedin: true }
            : user
        ),
        message: "Login successful",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.email === action.payload.email
            ? { ...user, isLoggedin: false }
            : user
        ),
        message: "Logout successful",
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case STEP:
      return {
        ...state,
        users: state.users.map((user) =>
          user.isLoggedin ? { ...user, ...action.payload } : user
        ),
      };
    default:
      return state;
  }
};
