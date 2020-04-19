
import {Request} from "../../helpers";
import { API, colors } from "../../constants";
import {Toast} from "../../components";
import Types from "../../actionTypes";

export const _getWeeklyPoints = async() => {
    const response = await Request({path: API.weeklypoints });
    if(response.StatusCode === 200)
    return new Promise(res=>res(response.ResponseData));
    else return new Promise(res => res([]));
}

export const setFcmDeviceToken = token => {
    return { type: Types.SET_FCM_DEVICE_TOKEN, payload: token, };
};
