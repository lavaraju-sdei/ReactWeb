import React, {useState} from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../../constants";


export default props => (
    <View style={props.style}>
        <ActivityIndicator color={props.color?props.color:colors.lightBlue3} />
    </View>
)