import {pop, _getPointsHistory} from '../../actions';
import {storeObj} from '../../store/setup';

export const goBack = cid => {
  pop(cid);
};
export const getHistoryPoints = () => {
  const {dispatch} = storeObj.store;
  dispatch(_getPointsHistory());
};

export const formatdata = history => {
  const {
    checkInPointsCount = [],
    checkOutPointsCount = [],
    EarnedCheckInPoints,
    EarnedCheckOutPoints,
  } = history;
  return {
    data: {
      left: checkInPointsCount.map(itm => ({...itm, point: itm.PointsEarned})),
      right: checkOutPointsCount.map(itm => ({
        ...itm,
        point: itm.PointsEarned,
      })),
    },
    totalcheckin: EarnedCheckInPoints,
    totalcheckout: EarnedCheckOutPoints,
  };
};
