
import {storeObj} from "../../store/setup"
import { register } from "../../actions"


export const submitSignUp = (stateObj,cid) =>{
    const {firstName, lastName, phoneNumber} = stateObj;
    const {dispatch, getState} = storeObj.store;
    const {user:{deviceToken}} = getState().user;
    dispatch(register({firstName, lastName, phoneNumber, deviceToken}, cid))
}