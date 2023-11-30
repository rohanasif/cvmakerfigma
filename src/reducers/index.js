import {
  GET_USERS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  STEP,
} from "../constants";

const initialState = {
  users: [],
  isLoading: false,
  message: { text: "" },
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        isLoading: false,
        message: { ...state.message, text: "Registration successful" },
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: { ...state.message, text: action.payload },
      };

    default:
      return state;
  }
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.email === action.payload.email
            ? { ...user, isLoggedin: true }
            : user
        ),
        message: { text: "Login successful" },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: { ...state.message, text: action.payload },
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.email === action.payload.email
            ? { ...user, isLoggedin: false }
            : user
        ),
        message: { text: "Logout successful" },
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: { ...state.message, text: action.payload },
      };
    default:
      return state;
  }
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP:
      return {
        ...state,
        users: state.users.map((user) =>
          user.isLoggedin ? { ...user, ...action.payload } : user
        ),
      };
  }
};
