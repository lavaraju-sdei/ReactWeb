import {colors, isWeb } from "../../constants";
import {heightScale, fontScale, widthScale, height } from "../../helpers";

const round = { minHeight : heightScale(isWeb?90:70), width : heightScale(isWeb?90:70) }
export const Styles = {
  rowContainer: { backgroundColor : colors.lightBlue5, borderRadius : 6 },
    extraWidth : { width : widthScale(5)  },
    pointsHeadView : { width : "90%", borderRadius : heightScale(5) },
    imageView : { width : widthScale(45) },
    medalImage : { height : heightScale(30), width : heightScale(30) },
    absolute : { position : 'absolute', width : '100%', zIndex : 1  },
    relative : { position : 'relative', width : '100%', zIndex : -1000,alignItems : 'flex-end' },
    pointsTitle : { color : colors.White, fontSize : fontScale(11) },
    pointsText : { color : colors.White, fontSize : fontScale(13) },
    loader:{ color: colors.lightBlue3 },
    footer: { height : heightScale(30) },
    dateText : { fontSize : fontScale(12), color : colors.Placehoder },
    xPontsText : { color : colors.White, fontSize : fontScale(11) },
    redeemText : { fontSize : fontScale(13)  },
    typeText : { color : colors.lightBlue3, fontSize : fontScale(16) },
    box : { backgroundColor : colors.White, borderRadius : heightScale(5) },
    round : { ...round, borderRadius :100, borderWidth:3, borderColor : colors.lightBlue6, backgroundColor : colors.lightBlue3 },
    roundIn : { ...round, borderRadius :100, borderWidth:3, borderColor : colors.lightBlue4, backgroundColor : colors.lightBlue3 },
    scroll : { height : isWeb ? heightScale(400) :heightScale(350) },
    left : { alignItems : 'flex-start'},
    right : { alignItems : 'flex-end'},

}