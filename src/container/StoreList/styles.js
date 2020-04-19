import {heightScale, fontScale} from '../../helpers';
import {colors} from '../../constants';
export const Styles = {
  headerTitle: {fontSize: fontScale(24), fontWeight: 'bold'},
  storeName: {fontSize: fontScale(16), color: colors.White},
  storeView: {borderRadius: heightScale(7)},
  emptyList: {fontSize: fontScale(16), fontWeight: 'bold', textAlign: 'center'},
};
