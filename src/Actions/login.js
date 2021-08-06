import * as api from "../Axios/axios";
import { AUTH } from "./types";
export const signin = (values, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(values);
    dispatch({
      type: AUTH,
      payload: data,
    });
    history.push("/");
  } catch (error) {}
};

export const signup = (values, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(values);
    dispatch({
      type: AUTH,
      payload: data,
    });
    history.push("/");
  } catch (error) {}
};
