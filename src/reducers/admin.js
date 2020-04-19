import Types from '../actionTypes';
const initialState = {
  page : 0,
  load:true,
  storeData:[],
  storeload_m:false,
  storeLoader:false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case Types.RESET :
      return initialState
    case Types.STORE_REQUEST:
      return {...state, store: action.payload, storeLoader: true};
    case Types.STORE_SUCCESS:
        console.log("action.key.... ",action)
      return {...state, load:false,storeLoader: false, storeData: action.payload};
    case Types.STORE_FAILED:
      return {...state, load:false,storeLoader: false};
    default:
      return state;
  }
};
