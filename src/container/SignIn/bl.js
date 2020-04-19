import {_getStores} from '../../actions';
import {storeObj} from '../../store/setup';
import {
  Keyboard,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
export const submitLogin = (state, latitude, longitude, cid) => {
  Keyboard.dismiss();
  const {dispatch} = storeObj.store;
  if (state.phoneNumber && !state.phoneNumberError) {
    let {phoneNumber} = state;
    dispatch(_getStores(phoneNumber, latitude, longitude));
  }
};
export const getPosition = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      error => {
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 55000, maximumAge: 10000},
    );
  });
};
export const hasLocationPermission = async () => {
  if (
    Platform.OS === 'ios' ||
    (Platform.OS === 'android' && Platform.Version < 23)
  ) {
    return true;
  }
  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (hasPermission) return true;
  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (status === PermissionsAndroid.RESULTS.GRANTED) return true;
  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show(
      'Location permission revoked by user.',
      ToastAndroid.LONG,
    );
  }
  return false;
};
