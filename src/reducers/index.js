import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constants";

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
        message: { ...state.message, text: "Registration failed" },
      };

    default:
      return state;
  }
};
