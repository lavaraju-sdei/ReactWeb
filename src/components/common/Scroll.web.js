import React, {Component} from "react";
import {View, ScrollView} from "react-native";
import { CommonStyle } from "../../styles";
export default props => 
            <ScrollView style={{}}>
                <View style={[CommonStyle.padding10, props.containerStyle]}>
                    {props.children}
                </View>
            </ScrollView>;
