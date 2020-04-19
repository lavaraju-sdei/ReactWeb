import {colors} from '../../constants';
import {fontScale, height, heightScale} from '../../helpers';

export const Styles = {
  icon: {color: colors.lightBlue3, fontSize: fontScale(30)},
  errorIcon: {color: colors.FadeBorder, fontSize: fontScale(250)},
  buttonText: {color: colors.lightBlue3, fontSize: fontScale(20)},
  '404Error': {fontWeight: 'bold', fontSize: fontScale(30)},
  notFountText: {fontSize: fontScale(30)},
  main: {height: height / 1.5},
  goBackButton: {paddingBottom: heightScale(20)},
  emptyView: {width: heightScale(30)},
};
