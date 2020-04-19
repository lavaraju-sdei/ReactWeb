import {_verifyOtp, _sendOtp, _checkin, goToAuth} from '../../actions';
import {storeObj} from '../../store/setup';
import {Keyboard} from 'react-native';

export const verifyOtp = (phoneNumber, otp) => {
  Keyboard.dismiss();
  const {dispatch, getState} = storeObj.store;
  const {
    user: {path = 'login'},
  } = getState().user;
  dispatch(
    path === 'login'
      ? _checkin(phoneNumber, otp)
      : _verifyOtp(phoneNumber, otp),
  );
};

export const resendOtp = phoneNumber => {
  Keyboard.dismiss();
  const {dispatch} = storeObj.store;
  dispatch(_sendOtp({phoneNumber}));
};
export const goAuth = () => goToAuth();
