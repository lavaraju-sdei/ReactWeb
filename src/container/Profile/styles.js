import {colors, isWeb} from '../../constants';
import {fontScale, heightScale, widthScale} from '../../helpers';
const scrollHeaight = isWeb ? {} : {};
const paddingH = isWeb ? {paddingHorizontal: widthScale(30)} : {};
export const Styles = {
  container: {},
  buttonText: {color: colors.White},
  messageText: {color: colors.lightBlue3},
  requestButton: {
    borderWidth: 1,
    borderColor: colors.lightBlue2,
    borderRadius: heightScale(3),
    minHeight: heightScale(50),
    width: widthScale(130),
  },
  requestText: {color: colors.lightBlue3},
  formModal: {
    backgrondColor: colors.White,
    borderRadius: heightScale(10),
    ...scrollHeaight,
    ...paddingH,
  },
  heading: {fontWeight: 'bold', fontSize: fontScale(20)},
  loader_r: {backgrondColor: colors.lightBlue3},
};
