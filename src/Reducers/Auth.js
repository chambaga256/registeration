import { AUTH, LOGOUT } from "../Actions/types";
const initialState = {
  user: [],
};
export default function Auth(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));

      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
