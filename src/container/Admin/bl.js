import {pop, _getviewAllStores} from '../../actions';
import {storeObj} from '../../store/setup';

export const goBack = cid => {
  pop(cid);
};
export const getviewAllStores = () => {
  const {dispatch} = storeObj.store;
  dispatch(_getviewAllStores());
};

export const addPromoOffer = () =>{
  
}