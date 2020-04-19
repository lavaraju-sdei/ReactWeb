// @ts-nocheck
import Types from '../../actionTypes';
import {Request} from '../../helpers';
import {API, colors} from '../../constants';
import {goToOtp, goToHome, goToAuth, goToStore} from '../';
import {pushToParticularScreen} from '../../actions';
import {Toast} from '../../components';
const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const _sendOtp = body => async dispatch => {
  try {
    dispatch({type: Types.AUTH_REQUEST});
    const response = await Request({path: API.sendotp, method: 'POST', body});
    dispatch({type: Types.AUTH_COMPLETE});
    if (response.StatusCode == 200) goToOtp();
    else Toast({message: response.Message, delay: 4000});
    dispatch({
      type: Types.CHECKIN_REQUEST,
      payload: {phoneNumber: body.phoneNumber, path: 'login'},
    });
  } catch (error) {
    dispatch({type: Types.AUTH_COMPLETE});
    console.log('catch error ', error);
    Toast({message: error.message, type: 'error', delay: 4000});
  }
};

export const register = (body, cid) => async dispatch => {
  try {
    dispatch({type: Types.AUTH_REQUEST});
    const response = await Request({path: API.register, method: 'POST', body});
    dispatch({type: Types.AUTH_COMPLETE});
    if (response.StatusCode == 200) {
      goToOtp();
    } else Toast({message: response.Message, type: 'error', delay: 4000});

    dispatch({
      type: Types.CHECKIN_REQUEST,
      payload: {...body, path: 'register'},
    });
  } catch (error) {
    dispatch({type: Types.AUTH_COMPLETE});
    Toast({message: error.message, type: 'error', delay: 4000});
  }
};

export const _verifyOtp = (phoneNumber, otp) => async dispatch => {
  try {
    dispatch({type: Types.AUTH_REQUEST});
    const response = await Request({
      path: API.verifyotp,
      method: 'POST',
      body: {phoneNumber, otp},
    });
    dispatch({type: Types.AUTH_COMPLETE});
    console.log('response response response ', response);
    if (response.StatusCode == 200) {
      dispatch({type: Types.CHECKIN_SUCCESS, payload: response.ResponseData});
      setTimeout(() => {
        goToHome();
      }, 1000);
    } else {
      Toast({message: response.Message, type: 'error', delay: 4000});
    }
  } catch (error) {
    console.log('catch error ', error);
    dispatch({type: Types.CHECKIN_FAILED});
    dispatch({type: Types.AUTH_COMPLETE});
    Toast({message: error.message, type: 'error', delay: 4000});
  }
};

export const _getStores = (
  phoneNumber,
  userLatitude,
  userLongitude,
) => async dispatch => {
  try {
    dispatch({type: Types.STORE_REQUEST});
    const response = await Request({
      path: API.getStores,
      method: 'POST',
      body: {phoneNumber, userLatitude, userLongitude},
    });
    if (response.StatusCode == 200) {
      dispatch({
        type: Types.STORE_SUCCESS,
        payload: {storeList: response.ResponseData, phoneNumber},
      });
      goToStore();
    } else if (response.StatusCode == 100) {
      dispatch({type: Types.STORE_FAILED});
      dispatch(_checkin(phoneNumber, response.ResponseData));
    } else if (response.StatusCode == 400) {
      dispatch({type: Types.STORE_FAILED});
      goToStore();
    } else {
      dispatch({type: Types.STORE_FAILED});
      return Toast({message: response.Message, type: 'error'});
    }
  } catch (error) {
    dispatch({type: Types.STORE_FAILED});
    Toast({message: error.message, type: 'error', delay: 4000});
  }
};
export const _checkin = (phoneNumber, storeId) => async dispatch => {
  let body = {
    phoneNumber: phoneNumber,
    storeId: storeId,
  };
  try {
    dispatch({type: Types.AUTH_REQUEST});
    const response = await Request({
      path: API.checkin,
      method: 'POST',
      body: body,
    });
    dispatch({type: Types.AUTH_COMPLETE});
    if (response.StatusCode == 200) {
      goToHome();
      return dispatch({
        type: Types.CHECKIN_SUCCESS,
        payload: response.ResponseData,
      });
    }
    if (response.StatusCode == 100) return goToOtp();
    else {
      dispatch({type: Types.CHECKIN_FAILED});
      return Toast({message: response.Message, type: 'error'});
    }
  } catch (error) {
    console.log('catche error ', error);
    dispatch({type: Types.CHECKIN_FAILED});
    dispatch({type: Types.AUTH_COMPLETE});
    Toast({message: error.message, type: 'error', delay: 4000});
  }
};

export const _checkout = body => async dispatch => {
  try {
    dispatch({type: Types.AUTH_REQUEST});
    const response = await Request({path: API.checkout, method: 'POST', body});
    dispatch({type: Types.AUTH_COMPLETE});
    console.log('response response response logout', JSON.stringify(response));
    if (response.StatusCode == 200) {
      goToAuth();
      dispatch({type: Types.RESET});
      dispatch({type: Types.LOGOUT});
      await timeout(500);
      Toast({message: response.Message});
    } else Toast({message: response.Message, type: 'error'});
  } catch (error) {
    dispatch({type: Types.AUTH_COMPLETE});
    Toast({message: error.message, type: 'error', delay: 4000});
  }
};

export const _logout = () => async dispatch => {
  await timeout(500);
  goToAuth();
  dispatch({type: Types.RESET});
  dispatch({type: Types.LOGOUT});
};

export const _getProfile = () => async (dispatch, getState) => {
  try {
    const {user = {}} = getState().user;
    dispatch({type: Types.PROFILE_REQUEST});
    const response = await Request({path: API.getProfile});
    if (response.StatusCode == 200)
      dispatch({
        type: Types.CHECKIN_SUCCESS,
        payload: {...user, ...response.ResponseData},
      });
    else Toast({message: response.Message, type: 'error'});
    dispatch({type: Types.PROFILE_COMPLETE});
    console.log('response response response logout', JSON.stringify(response));
  } catch (error) {
    dispatch({type: Types.PROFILE_COMPLETE});
    Toast({message: error.message, type: 'error', delay: 4000});
  }
};

export const _updateProfile = body => async (dispatch, getState) => {
  try {
    dispatch({type: Types.PROFILE_REQUEST});
    const response = await Request({
      path: API.updateProfile,
      method: 'POST',
      body,
    });
    dispatch({type: Types.PROFILE_COMPLETE});
    console.log('response response response logout', JSON.stringify(response));
    Toast({
      message: response.Message,
      type: response.StatusCode !== 200 ? 'error' : 'warn',
    });
    dispatch(_getProfile());
  } catch (error) {
    dispatch({type: Types.PROFILE_COMPLETE});
    Toast({message: error.message, type: 'error', delay: 4000});
  }
};

export const _requestNumber = body => async dispatch => {
  try {
    dispatch({type: Types.REQUEST_REQUEST});
    const response = await Request({
      path: API.requestNumber,
      method: 'POST',
      body,
    });
    dispatch({type: Types.REQUEST_COMPLETE});
    console.log('response response response logout', JSON.stringify(response));
    Toast({
      message: response.Message,
      type: response.StatusCode == !200 ? 'error' : 'warn',
    });
  } catch (error) {
    dispatch({type: Types.REQUEST_COMPLETE});
    Toast({message: error.message, type: 'error', delay: 4000});
  }
};
