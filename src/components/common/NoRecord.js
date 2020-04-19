import React, {useState} from "react";
import { View, Text } from "react-native";
import { Strings } from "../../constants";
import {CommonStyle} from "../../styles";
const {error} = Strings;

export default props => (
    <View style={[CommonStyle.flex1, CommonStyle.paddingV20, CommonStyle.center, CommonStyle.marginV20, props.style]}>
        <Text style={[CommonStyle.text]}> {error.noRecFound} </Text>
    </View>
)