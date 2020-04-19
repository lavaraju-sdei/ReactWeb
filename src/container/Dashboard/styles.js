import {colors, Fonts} from '../../constants';
import {heightScale, height, fontScale} from '../../helpers';

export const Styles = {
  container: {},
  box: {
    height: height / 4.5,
    width: '90%',
    backgroundColor: 'grey',
    borderRadius: 3,
  },
  boxWeb: {height: heightScale(220)},
  innerText: {fontSize: fontScale(13), color: colors.lightBlue3},
  outerText: {fontSize: fontScale(13), textAlign: 'center'},
  hairline: {
    borderBottomWidth: 1,
    borderColor: colors.lightBlue,
    width: '100%',
  },
  icons: {height: heightScale(30), width: heightScale(30)},
  buttonText: {color: colors.White},
};
