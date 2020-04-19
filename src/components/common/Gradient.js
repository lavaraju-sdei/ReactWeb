
import React, {Component} from "react";
import LinearGradient from 'react-native-linear-gradient';
import {heightScale} from "../../helpers/";
import {colors, Fonts} from "../../constants";
import {Styles} from "./Styles";
import {CommonStyle} from "../../styles";

export default props =>{
    const {horizontal=true,color=colors.blueGradient, style={}, } = props;
    const orientation = horizontal?{start:{x: 0, y: 0}, end:{x: 1, y: 0  } } : {}
    return  <LinearGradient {...orientation} colors={color}  style={[ Styles.gradientContainer, style]}>
                {props.children}
            </LinearGradient>

}