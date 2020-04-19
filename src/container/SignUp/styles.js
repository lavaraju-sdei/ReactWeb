import {Dimensions, Platform} from "react-native"
import { heightScale, fontScale } from "../../helpers";
import {colors, isWeb} from "../../constants";
const {height} = Dimensions.get("window")
const scrollHeaight = isWeb?{}:{height: height/1.8}
export const Styles = {
  container: {backgrondColor: colors.container},
  inputStyle: {width: "70%"},
  inputContainer: {width: "70%"},
  memberText: {color: colors.Green, paddingVertical: 30},
  buttonText: {color: colors.White},
  scroll:{ height:height/1.5 },
  formModal:{ backgrondColor:colors.White, borderRadius : heightScale(10), ...scrollHeaight },
  heading:{ fontWeight : "bold", fontSize : fontScale(20) },
  agreementText : { color : colors.lightBlue3, fontSize: fontScale(11) }
};
