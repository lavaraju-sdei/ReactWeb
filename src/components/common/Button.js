import React from "react";
import { TouchableOpacity, Platform, ActivityIndicator, View, Text } from "react-native";
import {Styles} from "./Styles";
import {CommonStyle} from "../../styles";
import {Gradient} from "../"
import { isWeb } from "../../constants"
const Button = props => {
  let { onPress = () => console.log("Button Pressed"), buttonStyle, name,
    textStyle, gradient=true, loader=false
  } = props;
     return gradient?(
      <View style={CommonStyle.padding10}>
        <Gradient style={Styles.buttonContainerStyle}>
          <TouchableOpacity disabled={loader} onPress={onPress} activeOpacity={1} style={[CommonStyle.center, Styles.buttonStyle, isWeb && Styles.webButtonStyle, buttonStyle]}>
              {loader?<ActivityIndicator color="white"/>:<Text style={[CommonStyle.text, textStyle]}>{name}</Text>}
          </TouchableOpacity>
        </Gradient>
      </View>
      )
      : 
      ( 
      <View style={CommonStyle.padding10}>
          <Gradient style={Styles.buttonContainerStyle}>
              <TouchableOpacity disabled={loader} onPress={onPress} style={[CommonStyle.center, CommonStyle.padding10, buttonStyle]}>
                  {loader?<ActivityIndicator color="white"/> : <Text style={[CommonStyle.text, textStyle]}>{name}</Text>}
            </TouchableOpacity>
          </Gradient>
        </View>
        );
};


export default Button;
