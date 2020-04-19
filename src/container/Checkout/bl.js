
import { _checkout } from "../../actions";
import {storeObj} from "../../store/setup"
import {Keyboard} from 'react-native'

export const submitCheckout = (state, cid) =>{
    Keyboard.dismiss()
    const {dispatch} = storeObj.store;
    if(state.phoneNumber && !state.phoneNumberError)
    dispatch(_checkout(state))  
    // goToHome();
}