import axios from "axios";
import {
  BASE_URL,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  STEP,
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
      const userToLogin = users.find(
        (u) => u.email === user.email && u.password === user.password
      );
      console.log(userToLogin);
      if (userToLogin) {
        await axios.patch(`${BASE_URL}/users/${userToLogin.id}`, {
          isLoggedin: true,
        });

        dispatch({ type: LOGIN_SUCCESS, payload: user });
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: "Invalid credentials" });
      }
    }
  } catch (e) {
    console.error(e);
  }
};

export const getLoggedUser = () => async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users?isLoggedin=true`);
    const userArr = response.data;
    const user = userArr[0];
    return user;
  } catch (e) {
    console.error(e);
  }
};

export const logout = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });
    if (user.isLoggedin) {
      const response = await axios.patch(`${BASE_URL}/${user.id}`, {
        isLoggedin: false,
      });
      dispatch({ type: LOGOUT_SUCCESS, payload: response.data });
    } else {
      dispatch({
        type: LOGIN_FAILURE,
        payload: "User not logged in! Please refresh!",
      });
    }
  } catch (e) {
    console.error(e);
  }
};

export const step = (info) => async (dispatch) => {
  try {
    const loggedUser = await dispatch(getLoggedUser());
    const userId = loggedUser.id;
    const response = axios.patch(`${BASE_URL}/users/${userId}`, info);
    dispatch({ type: STEP, payload: response.data });
  } catch (e) {
    console.error(e);
  }
};
