import axios from "axios";
import {
  BASE_URL,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants";

export const signup = (user) => async (dispatch) => {
  try {
    const usersResponse = await axios.get(`${BASE_URL}/users`);
    const users = usersResponse.data;
    dispatch({ type: SIGNUP_REQUEST });
    if (users.find((u) => u.email === user.email)) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: `${user.name} already registered`,
      });
    } else {
      const response = await axios.post(`${BASE_URL}/users`, user);
      const newUser = response.data;
      dispatch({ type: SIGNUP_SUCCESS, payload: newUser });
    }
  } catch (e) {
    console.error(e);
  }
};
export const login = (user) => async (dispatch) => {
  try {
    const usersResponse = await axios.get(`${BASE_URL}/users`);
    const users = usersResponse.data;
    dispatch({ type: LOGIN_REQUEST });
    if (users.length === 0) {
      dispatch({ type: LOGIN_FAILURE, payload: "No users registered" });
    } else {
      if (
        users.find(
          (u) => u.email === user.email && u.password === user.password
        )
      ) {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: "Invalid credentials" });
      }
    }
  } catch (e) {
    console.error(e);
  }
};
