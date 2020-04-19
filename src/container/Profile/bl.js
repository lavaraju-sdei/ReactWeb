import {pop, _getProfile, _requestNumber, _updateProfile} from '../../actions';
import {storeObj} from '../../store/setup';

export const goBack = cid => {
  pop(cid);
};
export const getProfile = () => {
  const {dispatch} = storeObj.store;
  dispatch(_getProfile());
};
export const onRequest = state => {
  const {dispatch, getState} = storeObj.store;
  const {
    user: {PhoneNumber},
  } = getState().user;
  dispatch(
    _requestNumber({
      newPhoneNumber: state.phoneNumber,
      oldPhoneNumber: PhoneNumber,
    }),
  );
};
export const onContinue = ({firstName, lastName}) => {
  const {dispatch} = storeObj.store;
  dispatch(_updateProfile({firstName, lastName}));
};
