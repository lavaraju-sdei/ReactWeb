
import Types from "../actionTypes";
const initialState = {
    promotional : {},
    loader_p : false,
    offers : {},
    loader_o : false,
    history : {},
    loader_h : false,
    redeem : {},
    loader_r : false,
    loader_m : false,
    page : 0,
    load : true

};
const resetOffers = { history :{}, loader_h : false, promotional : {}, loader_p : false, redeem : {}, loader_r : false  };
const resetHistory = { offers :{}, loader_o : false, promotional : {}, loader_p : false, redeem : {}, loader_r : false  };
const resetPromotional = { history :{}, loader_h : false, offers : {}, loader_o : false, redeem : {}, loader_r : false  };
const resetRedeem = { history :{}, loader_h : false, promotional : {}, loader_o : false, offers : {}, loader_o : false  };

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.RESET :
      return initialState

    case Types.PROMOTIONAL_REQUEST : 
      return { ...state, loader_p : true, page : 0, load : true, ...resetPromotional }
    case Types.PROMOTIONAL_COMPLETE :
      return { ...state, loader_p : false, promotional : action.payload, ...resetPromotional }

    case Types.POINTSHISTORY_REQUEST :
      return { ...state, loader_h : true, page : 0, load : true, ...resetHistory }

    case Types.POINTSHISTORY_COMPLETE : 
     return {...state, loader_h : false, history : action.payload , ...resetHistory}

     case Types.OFFERS_REQUEST :
      return { ...state, loader_o : true, page : 0, load : true, ...resetOffers }
    case Types.OFFERS_COMPLETE : 
     return {...state, loader_o : false, offers : action.payload, ...resetOffers }
  
     case Types.REDEEMPOINTS_REQUEST :
      return { ...state, loader_r : true, page : 0, load : true, ...resetRedeem }
    case Types.REDEEMPOINTS_COMPLETE : 
     return {...state, loader_r : false, redeem : action.payload, ...resetRedeem }

    case Types.LOADMORE_REQUEST : 
     return {...state, loader_m : true }

     case Types.LOADMORE_COMPLETE : 
     console.log("action.key ",action)
     return {...state, loader_m : false, [action.key] : action.payload, page : action.page, load : action.load  }


    default : 
      return state;
  }
};
