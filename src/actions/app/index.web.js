import {history} from '../../helpers/';
import * as Types from '../../actionTypes';
// eslint-disable-next-line
export const pushToParticularScreen = (componentId, screen, options) =>
  history.push(`/${screen}`);
export const goBack = () => history.goBack();
export const pop = () => history.goBack();
export const goToAuth = () => history.replace('/');
export const goToHome = () => history.push('/Dashboard');
export const goToOtp = () => history.push('/OTP');
export const goToStore = () => history.push('/StoreList');
export const setCurrentSideMenuRoute = screen => {
  return dispatch => {
    dispatch({
      type: Types.CURRENT_SIDEMENU_ROUTE,
      payload: {screen},
    });
  };
};
/* eslint-disable  */
export const setScrenStack = (componentId = null, screen, visible) => {
  return dispatch => {
    dispatch({type: Types.SET_SCREEN, payload: screen});
    history.push(`/${screen}`);
  };
};
