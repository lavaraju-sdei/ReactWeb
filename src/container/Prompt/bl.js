


import { _getWeeklyPoints, _sendOtp, pushToParticularScreen } from "../../actions";
import {storeObj} from "../../store/setup"

  export const changeRoute = (cid,name) => {
    pushToParticularScreen(cid, name, {});
  }
  export const getWeeklyPoints = () => {
    return _getWeeklyPoints();
  }