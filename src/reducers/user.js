import Types from '../actionTypes';
const initialState = {
  isLoggedIn: false,
  storeLoader: false,
  user: {},
  deviceToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGOUT:
      return initialState;
    case Types.CHECKIN_REQUEST:
      return {...state, user: action.payload, isLoggedIn: false};
    case Types.CHECKIN_SUCCESS:
      return {...state, user: action.payload, isLoggedIn: true};
    case Types.CHECKIN_FAILED:
      return {...state, isLoggedIn: false};

    case Types.STORE_REQUEST:
      return {...state, store: action.payload, storeLoader: true};
    case Types.STORE_SUCCESS:
      return {...state, store: action.payload, storeLoader: false};
    case Types.STORE_FAILED:
      return {...state, storeLoader: false};
    case Types.SET_FCM_DEVICE_TOKEN:
      return {...state, deviceToken: action.payload};
    default:
      return state;
  }
};
