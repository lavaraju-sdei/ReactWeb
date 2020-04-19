import Types from "../../actionTypes";
import {Request} from "../../helpers";
import { API} from "../../constants";
import { _logout } from "../";


const timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const handleError = (code, message, type="error", toast=true) => {
    if(code === 500){
        Toast({ message, type, delay : 4000 })
        _logout
    }else toast &&
    Toast({ message : message, type, delay : 4000 })
}
export const _getviewAllStores = () => async dispatch => {
    let payload = {};
    try {
        dispatch({ type : Types.STORE_REQUEST })
        const response = await Request({path: API.viewAllStores });
        console.log("_getviewAllStores response ",response);
        const {StatusCode=200, Message='', ResponseData=[]} = response
        if(StatusCode===200) {
            dispatch({ type : Types.STORE_SUCCESS, payload:ResponseData })
        }     
        else handleError(StatusCode, Message, "warn")
    } catch (error) {
        dispatch({ type : Types.STORE_FAILED })
        console.log("catch error ",error);
        Toast({ message : error.message, type : "error", delay : 4000 })
    }
 }
