import Types from "../../actionTypes";
import {Request} from "../../helpers"
import { API, colors } from "../../constants"
import {Toast} from "../../components"
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
export const _getWeeklyPromotions = () => async dispatch => {
    let payload = {};
    try {
        dispatch({ type : Types.PROMOTIONAL_REQUEST })
        const response = await Request({path: API.getPromotional });
        console.log("_getWeeklyPromotions response ",response);
        const {StatusCode=200, Message='', ResponseData=[]} = response
        if(StatusCode===200)
            payload = ResponseData;
        else handleError(StatusCode, Message, "warn")
        dispatch({ type : Types.PROMOTIONAL_COMPLETE, payload });
    } catch (error) {
        dispatch({ type : Types.PROMOTIONAL_COMPLETE })
        console.log("catch error ",error);
        Toast({ message : error.message, type : "error", delay : 4000 })
    }
 }
 export const _promotionalEvents = body => async dispatch => {
    let payload = {};
    try {
        dispatch({ type : Types.PROMOTIONAL_REQUEST })
        const response = await Request({path: API.postPromotional, method:"POST", body });
        console.log("_getWeeklyPromotions response ",response);
        const {StatusCode=200, Message='', ResponseData=[]} = response
        if(StatusCode===200)
            payload = ResponseData;
        handleError(StatusCode, Message, StatusCode===200 && "warn")
        dispatch({ type : Types.PROMOTIONAL_COMPLETE, payload:{} });
        dispatch(_getWeeklyPromotions())

    } catch (error) {
        dispatch({ type : Types.PROMOTIONAL_COMPLETE })
        console.log("catch error ",error);
        Toast({ message : error.message, type : "error", delay : 4000 })
    }
 }
 

 export const _getPointsHistory = () => async (dispatch, getState) => {
    let payload = {};
    let {page=0, history} = getState().dashboard;
    let skip = page;
    const {checkInPointsCount=[] ,checkOutPointsCount=[], EarnedCheckInPoints, EarnedCheckOutPoints} = history;
    let newCheckIn = [], newCheckout = [], totalCheckIn=EarnedCheckInPoints, totalCheckout=EarnedCheckOutPoints;
    try {
        dispatch({ type : page?Types.LOADMORE_REQUEST : Types.POINTSHISTORY_REQUEST })
        const response = await Request({path: API.getPointsHistory, method: "POST", body : {pageNumber:page, pageSize:10} });
        console.log("_getMorePointsHistory response ",response);
        const {StatusCode=200, Message='', ResponseData={}} = response;
        if(StatusCode===200){
            skip = +page+1;
            newCheckIn = ResponseData.checkInPointsCount;
            newCheckout = ResponseData.checkOutPointsCount;
            totalCheckIn = ResponseData.EarnedCheckInPoints;
            totalCheckout = ResponseData.EarnedCheckOutPoints;
        }
        else handleError(StatusCode, Message, "warn");
        payload = {checkInPointsCount:[...checkInPointsCount, ...newCheckIn], checkOutPointsCount:[...checkOutPointsCount, ...newCheckout], EarnedCheckInPoints : totalCheckIn, EarnedCheckOutPoints: totalCheckout };
        dispatch({ type : Types.POINTSHISTORY_COMPLETE })
        dispatch({ type : Types.LOADMORE_COMPLETE, payload, key : 'history', payload, page : skip, load : newCheckIn.length !==0 && newCheckout.length !==0  });
        
    } catch (error) {
        dispatch({ type : Types.LOADMORE_COMPLETE })
        dispatch({ type : Types.POINTSHISTORY_COMPLETE })
        console.log("catch error ",error);
        Toast({ message : error.message, type : "error", delay : 4000 })
    }
 } 

 export const _getRedeemPoints = () => async dispatch => {
    let payload = {};
    try {
        dispatch({ type : Types.REDEEMPOINTS_REQUEST })
        const response = await Request({path: API.getRedeemPoints });
        console.log("_getRedeemPoints response ",response);
        const {StatusCode=200, Message='', ResponseData=[]} = response
        if(StatusCode===200)
            payload = ResponseData;
        else handleError(StatusCode, Message, "warn")
        dispatch({ type : Types.REDEEMPOINTS_COMPLETE, payload });
    } catch (error) {
        dispatch({ type : Types.REDEEMPOINTS_COMPLETE })
        console.log("catch error ",error);
        Toast({ message : error.message, type : "error", delay : 4000 })
    }
 }

 export const _redeemPoints = body => async dispatch => {
    let payload = {};
    try {
        dispatch({ type : Types.REDEEMPOINTS_REQUEST })
        const response = await Request({path: API.postRedeemPoints, method : "POST", body });
        console.log("_getRedeemPoints post response ", response);
        const {StatusCode=200, Message='', ResponseData=[]} = response
        if(StatusCode!==200) handleError(StatusCode, Message, "warn")
        dispatch({ type : Types.REDEEMPOINTS_COMPLETE, payload : {} });
        dispatch(_getRedeemPoints());
    } catch (error) {
        dispatch({ type : Types.REDEEMPOINTS_COMPLETE })
        console.log("catch error ",error);
        Toast({ message : error.message, type : "error", delay : 4000 })
    }
 }
 

 export const _getOffers = () => async dispatch => {
    let payload = {};
    try {
        dispatch({ type : Types.OFFERS_REQUEST })
        const response = await Request({path: API.getOffers });
        console.log("_getOffers response ",response);
        const {StatusCode=200, Message='', ResponseData=[]} = response
        if(StatusCode===200)
            payload = ResponseData;
        else handleError(StatusCode, Message, "warn")
        dispatch({ type : Types.OFFERS_COMPLETE, payload });
    } catch (error) {
        dispatch({ type : Types.OFFERS_COMPLETE })
        console.log("catch error ",error);
        Toast({ message : error.message, type : "error", delay : 4000 })
    }
 }

 export const _enterOffers = body => async dispatch => {
    try {
        dispatch({ type : Types.OFFERS_REQUEST })
        const response = await Request({path: API.postOffers, body, method:"POST" });
        console.log("_getOffers response ",response);
        const {StatusCode=200, Message='', ResponseData=[]} = response
        if(StatusCode===200)
            payload = ResponseData;
        handleError(StatusCode, Message, StatusCode===200?"default":"warn")
        dispatch({ type : Types.OFFERS_COMPLETE, payload:{} });
        dispatch(_getOffers())
    } catch (error) {
        dispatch({ type : Types.OFFERS_COMPLETE })
        console.log("catch error ",error);
        Toast({ message : error.message, type : "error", delay : 4000 })
    }
 }