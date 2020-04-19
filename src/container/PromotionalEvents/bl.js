import {pop, _getWeeklyPromotions, _promotionalEvents} from '../../actions';
import {Alert} from '../../components';
import {Strings} from '../../constants';
import {storeObj} from '../../store/setup';

export const goBack = cid => {
  pop(cid);
};
export const getWeeklyPromotions = () => {
  const {dispatch} = storeObj.store;
  dispatch(_getWeeklyPromotions());
};

const confirmed = points => {
  const {dispatch, getState} = storeObj.store;
  const {
    user: {phoneNumber},
  } = getState().user;
  const body = {promotionId: points.PromotionId, phoneNumber};
  dispatch(_promotionalEvents(body));
};

export const onEnter = prize => {
  const {
    promotionalEvents: {enterOfferMessage},
    common,
    dashboard: {promotionalEvents},
  } = Strings;
  Alert({
    title: promotionalEvents,
    message: enterOfferMessage,
    label1: common.cancel,
    label2: common.continue,
    onPress2: () => confirmed(prize),
  });
};
