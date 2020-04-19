import React, {Component} from "react";
import {View, ScrollView, Platform} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {CommonStyle} from "../../styles";
export default props => {
    return   <KeyboardAwareScrollView
                contentContainerStyle={[CommonStyle.margin3,CommonStyle.paddingV10,props.containerStyle]}
                style={[ props.style]}
                keyboardShouldPersistTaps='handled'
                enableResetScrollToCoords={false}
                // enableAutomaticScroll={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {props.children}
            </KeyboardAwareScrollView>;
  
}