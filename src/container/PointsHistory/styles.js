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
  redeemText: {fontSize: fontScale(13)},
  headTextBox: {width: '100%'},
  box: {backgroundColor: colors.White, borderRadius: heightScale(5)},
  scroll: {...scroll},
  heading: {color: colors.lightBlue3},
};
