import {Keyboard} from 'react-native';
import {_checkin} from '../../actions';
import {storeObj} from '../../store/setup';
export const checkIn = (phoneNumber, storeId) => {
  Keyboard.dismiss();
  const {dispatch} = storeObj.store;
  if (phoneNumber) {
    dispatch(_checkin(phoneNumber, storeId));
  }
};
