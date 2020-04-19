import {pop, _getRedeemPoints, _redeemPoints} from '../../actions';
import {storeObj} from '../../store/setup';
import {Strings} from '../../constants';
import {Alert} from '../../components';

export const goBack = cid => {
  pop(cid);
};
export const getRedeemPoints = () => {
  const {dispatch} = storeObj.store;
  dispatch(_getRedeemPoints());
};
const confirmed = points => {
  const checkIn = points.type === 'checkin',
    checkOut = points.type === 'checkout';
  const {dispatch, getState} = storeObj.store;
  const {
    user: {PhoneNumber},
  } = getState().user;
  const body = {
    rewardId: points.RewardId,
    checkIn,
    checkOut,
    phoneNumber: PhoneNumber,
  };
  dispatch(_redeemPoints(body));
};
export const onPoints = points => {
  const checkIn = points.type === 'checkin',
    checkOut = points.type === 'checkout';
  const {getState} = storeObj.store;
  const {
    redeem: {CheckInBalancePoints, CheckOutBalancePoints},
  } = getState().dashboard;
  if (checkIn)
    if (CheckInBalancePoints < points.point) noRedeemPoints();
    else availableRedeemPoints(points);
  if (checkOut)
    if (CheckOutBalancePoints < points.point) noRedeemPoints();
    else availableRedeemPoints(points);
};
const availableRedeemPoints = points => {
  const {
    redeemPoints: {redeemPointsConfirmMsg},
    common,
    dashboard: {redeemPoints},
  } = Strings;
  Alert({
    title: redeemPoints,
    message: redeemPointsConfirmMsg,
    label1: common.cancel,
    onPress2: () => confirmed(points),
  });
};
const noRedeemPoints = () => {
  const {
    redeemPoints: {notEnoughPoints},
    common,
    dashboard: {redeemPoints},
  } = Strings;
  Alert({
    title: redeemPoints,
    message: notEnoughPoints,
    label1: '',
    label2: common.ok,
  });
};
export const formatdata = redeem => {
  const {
    checkInRewardModel = [],
    checkOutRewardModel = [],
    CheckInBalancePoints,
    CheckOutBalancePoints,
  } = redeem;
  return {
    checkInData: checkInRewardModel,
    checkOutData: checkOutRewardModel,
    data: {
      left: checkInRewardModel.map(itm => ({
        ...itm,
        point: itm.RewardAmount,
        type: 'checkin',
      })),
      right: checkOutRewardModel.map(itm => ({
        ...itm,
        point: itm.RewardAmount,
        type: 'checkout',
      })),
    },
    totalcheckin: CheckInBalancePoints,
    totalcheckout: CheckOutBalancePoints,
  };
};
