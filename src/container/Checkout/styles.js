import {heightScale, fontScale} from '../../helpers';
import {colors, Fonts} from '../../constants';
export const Styles = {
  container: {backgrondColor: colors.White},
  checkoutText: {fontWeight: 'bold', fontSize: fontScale(20)},
  checkoutConfirmText: {fontSize: fontScale(12)},
  checkoutInfoText: {fontSize: fontScale(12), textAlign: 'center'},
  inputStyle: {borderColor: colors.lightBlue3},
  inputContainer: {width: '100%'},
  buttonText: {color: colors.White},
  loginSpace: {paddingTop: heightScale(30)},
};
