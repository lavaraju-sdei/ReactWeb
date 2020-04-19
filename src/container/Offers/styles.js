import {colors, isWeb} from '../../constants';
import {fontScale, height, heightScale} from '../../helpers';
const scroll = isWeb ? {} : {height: height / 2.1};

export const Styles = {
  container: {},
  buttonText: {color: colors.White},
  hairline: {
    borderBottomWidth: 1,
    borderColor: colors.lightBlue3,
    width: '100%',
    opacity: 0.1,
  },
  headBox: {borderRadius: heightScale(10)},
  icons: {height: heightScale(25), width: heightScale(25)},
  redeemText: {fontSize: fontScale(10)},
  headTextBox: {width: '100%'},
  box: {backgroundColor: colors.White, borderRadius: heightScale(5)},
  xPontsText: {color: colors.White, fontSize: fontScale(11)},
  round: {
    minHeight: heightScale(30),
    minWidth: heightScale(30),
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colors.lightBlue6,
    backgroundColor: colors.lightBlue3,
  },
  typeText: {color: colors.lightBlue3, fontSize: fontScale(16)},
  scroll: {...scroll},
  heading: {color: colors.lightBlue3},
};
