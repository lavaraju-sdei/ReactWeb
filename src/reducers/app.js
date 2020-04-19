import * as types from "../actionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  root: "login", // 'login' / 'after-login',
});

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ROOT_CHANGED:
      return {
        ...state,
        root: action.root,
      };

    case "LOGOUT":
      return {
        ...state,
        root: "login",
      };
    default:
      return state;
  }
}
