import {pop, _enterOffers, _getOffers} from '../../actions';
import {Alert} from '../../components';
import {Strings} from '../../constants';
import {storeObj} from '../../store/setup';

export const goBack = cid => {
  pop(cid);
};

export const getOffers = () => {
  const {dispatch} = storeObj.store;
  dispatch(_getOffers());
};
const confirmed = points => {
  const {dispatch, getState} = storeObj.store;
  const {
    user: {PhoneNumber},
  } = getState().user;
  const body = {offerId: points.Id, phoneNumber: PhoneNumber};
  dispatch(_enterOffers(body));
};
export const onPoints = points => {
  const {
    offers: {enterOfferConfirmation},
    common,
    dashboard: {offers},
  } = Strings;
  Alert({
    title: offers,
    message: enterOfferConfirmation,
    label1: common.cancel,
    onPress2: () => confirmed(points),
  });
};
