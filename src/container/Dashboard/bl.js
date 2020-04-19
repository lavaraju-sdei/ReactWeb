import {_logout, pushToParticularScreen} from '../../actions';
import {storeObj} from '../../store/setup';
import {Strings} from '../../constants';
import {Alert} from '../../components';

export const logOut = () => {
  const {dispatch} = storeObj.store;
  const {
    common,
    auth: {logout, logoutConfirmMessage},
  } = Strings;
  dispatch(_logout());
  // Alert({title: logout, message: logoutConfirmMessage, label1:common.cancel, label2:logout, onPress2:()=>dispatch(_logout()) } )
};
export const changeRoute = (cid, screen, option) => {
  pushToParticularScreen(cid, screen);
};
