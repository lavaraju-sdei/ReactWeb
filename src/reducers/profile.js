import Types from "../actionTypes";
const initialState = {
  loader_r: false,
  loader_p: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.PROFILE_REQUEST:
      return {
        ...state,
        loader_p: true,
      };
    case Types.PROFILE_COMPLETE:
      return {
        ...state,
        loader_p: false
      };
    case Types.REQUEST_REQUEST:
      return {
        ...state, loader_r: true
      }
    case Types.REQUEST_COMPLETE:
      return {
        ...state, loader_r: false
      }
    case Types.RESET:
      return { ...initialState };
      
    default:
      return state;
  }
};
