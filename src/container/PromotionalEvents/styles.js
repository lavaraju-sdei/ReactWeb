import {colors, isWeb} from "../../constants";
import {heightScale, fontScale, height, widthScale} from "../../helpers";
const scroll = isWeb?{}:{ height : height/2.1 }

export const Styles = {
  container: { },
  buttonText : { color : colors.White },
  headBox : { borderRadius : heightScale(10) },
  headTextBox : { width : '100%' },
  icons : { height : heightScale(25), width : heightScale(25) },
  hairline : { borderBottomWidth : 1, borderColor : colors.lightBlue3, width : '100%', opacity : 0.1 },
  redeemText : { fontSize : fontScale(13)  },
  heading : { color : colors.lightBlue3 },
  box : {borderRadius : heightScale(5), width : "100%", backgroundColor : colors.White},
  round : { minHeight : heightScale(30), minWidth : heightScale(30), borderRadius :100, borderWidth:3, borderColor : colors.lightBlue6, backgroundColor : colors.lightBlue3 },
  typeText : { color : colors.lightBlue3, fontSize : fontScale(16) },
  xPontsText : { color : colors.White, fontSize : fontScale(11) },
  scroll : { ...scroll },
  imagePrize : { height : heightScale(50), width : widthScale(100) }
};