import {colors, isIphoneX, isWeb} from "../../constants";
import {heightScale, fontScale, height, width, widthScale, } from "../../helpers";

const STATUSBAR_HEIGHT = isIphoneX
  ? heightScale(30)
  : heightScale(0);

export const Styles = {
  logo:{ height : heightScale(62), width : heightScale(62), marginRight : widthScale(20) },
  leftIcon : { fontSize : fontScale(30) },
  webLogo : {height : heightScale(100), width : heightScale(100)},
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor : colors.container
  },
  child : {minHeight : height-heightScale(110)},
  gradientContainer:{},
  header:{height:heightScale(60), backgroundColor:colors.container},
  headerTitle: {marginLeft:-10},
  headerBackButton:{height:"100%", width:heightScale(35)},
  formTextInputContainer: {
    borderRadius: 100,
    fontSize: fontScale(16),
    color : colors.lightBlue3,
  },
  formError :{borderColor:colors.Tomato},
  datepickerPlaceholder:{ color : colors.lightBlue2 },
  webInput:{outlineWidth : 0},
  errorInputText : {color:colors.Tomato, fontSize:fontScale(14)},
  formTextWrap:{ height : isWeb? heightScale(65) : heightScale(50), borderRadius : 100, borderColor:colors.lightBlue, borderWidth : 1 },
  textInputText:{ color:colors.Charcoal},
  buttonStyle: { paddingVertical : heightScale(13) },
  webButtonStyle: { paddingVertical : heightScale(17) },
  safeContainer:{ paddingHorizontal : 0, paddingBottom:0, backgroundColor:colors.container },
  buttonContainerStyle:{ borderRadius: 100 },
  mainContainer: {
    backgroundColor: colors.Transparent,
    position: "absolute",
    zIndex: 9999,
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height,
    width: "100%",
  },
  innerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //Footer
  footer : { width, height:heightScale(90), marginBottom: isIphoneX?heightScale(10) : 3, bottom:0, zIndex:-1000 },
  footerWeb : { bottom:0, zIndex:-1000 },
  otpInputView:{height:heightScale(50), width : heightScale(50), borderRadius : heightScale(3), 
                  borderWidth : 1, borderColor : colors.lightBlue4},
  otpInput : { fontSize:fontScale(19), width:"100%", textAlign : 'center'},
  toastView : { minHeight: heightScale(53), backgroundColor: colors.Charcoal, position: 'absolute',left:0, top:0, right:0, bottom:0, marginBottom : -17 },
  toastText : { color : colors.White, fontSize : fontScale(13) },
  redToast : {backgroundColor : colors.Tomato},
  imageWebView:{alignItems:'flex-end'}
};
