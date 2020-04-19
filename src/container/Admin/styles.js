import {colors, Fonts} from '../../constants';
import {fontScale, height, heightScale} from '../../helpers';

export default {
  container: {height: heightScale(800)},
  sidemenu: {
    backgroundColor: colors.lightBlue,
    borderTopLeftRadius: heightScale(7),
    borderBottomLeftRadius: heightScale(7),
  },
  hairline: {with: '100%', borderBottomWidth: 1, borderColor: colors.lightBlue},
  body: {
    width: '85%',
    height: '98%',
    borderRadius: heightScale(7),
    backgroundColor: colors.LightGrey,
    borderBottomRightRadius: heightScale(7),
    borderTopRightRadius: heightScale(7),
  },
  sideButton: {width: '90%', borderRadius: heightScale(10)},
  activeMenu: {backgroundColor: colors.White},
  sideIcon: {color: colors.White, fontSize: fontScale(16)},
  activeButtonText: {color: colors.Blue, fontSize: fontScale(16)},
  tabMenu: {
    borderRadius: heightScale(7),
  },
  activeTab: {backgroundColor: colors.White},
  activeTabText: {color: colors.White},
  tabText: {fontWeight: 'bold'},
  buttonText: {color: colors.White, fontSize: fontScale(16)},
  toggle: {justifyContent: 'flex-end', width: '95%'},
  extraHeight: {height: heightScale(20)},
  userRedeemHeader: {fontSize: fontScale(24), fontWeight: 'bold'},
};
