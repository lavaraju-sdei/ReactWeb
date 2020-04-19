const format = ['_REQUEST', '_COMPLETE'];
const types = [
  'DASHBOARD',
  'LOGIN',
  'REGISTER',
  'OTP',
  'AUTH',
  'PROMOTIONAL',
  'POINTSHISTORY',
  'OFFERS',
  'REDEEMPOINTS',
  'REQUEST',
  'PROFILE',
  'LOADMORE',
  'ADMIN'
];
export default {
  ...types
    .map(t => format.map(i => `${t}${i}`))
    .flat(1)
    .reduce((obj, v) => {
      obj[v] = v;
      return obj;
    }, {}),
  ...{
    RESET: 'RESET',
    CHECKIN_SUCCESS: 'CHECKIN_SUCCESS',
    CHECKIN_FAILED: 'CHECKIN_FAILED',
    CHECKIN_REQUEST: 'CHECKIN_REQUEST',
    LOGOUT: 'LOGOUT',
    SET_FCM_DEVICE_TOKEN: 'SET_FCM_DEVICE_TOKEN',
    STORE_SUCCESS: 'STORE_SUCCESS',
    STORE_FAILED: 'STORE_FAILED',
    STORE_REQUEST: 'STORE_REQUEST',
  },
};
