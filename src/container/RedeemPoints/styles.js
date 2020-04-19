import {colors, isWeb} from '../../constants';
import {heightScale, fontScale, widthScale, height} from '../../helpers';

export const Styles = {
  rowContainer: {backgroundColor: colors.lightBlue5, borderRadius: 6},
  headTextBox: {width: '100%'},
  buttonText: {color: colors.White},
  heading: {color: colors.lightBlue3, fontSize: fontScale(12)},
  headBox: {borderRadius: heightScale(10)},
  icons: {height: heightScale(25), width: heightScale(25)},
  hairline: {
    borderBottomWidth: 1,
    borderColor: colors.lightBlue3,
    width: '100%',
    opacity: 0.1,
  },
  redeemText: {fontSize: fontScale(10)},
};
