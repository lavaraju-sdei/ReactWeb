import Types from "../actionTypes";
const initialState = {
  loader: false,
  log : {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTH_REQUEST:
      return {
        ...state,
        loader: true,
      };
    case Types.REGISTER_COMPLETE:
      return {
        ...state,
        loader: false,
        log : action.payload
      };
    case Types.OTP_REQUEST:
      return {
        ...state, loader: true
      }
    case Types.AUTH_COMPLETE:
      return {
        ...state, loader: false
      }
    case Types.RESET:
      return { ...initialState };
    default:
      return state;
  }
};
