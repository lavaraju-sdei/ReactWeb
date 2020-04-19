/**
 * Toast component
 * Author - Ganesh Singh Papola
 * Date - 5 Mar, 2020
 * simple animated toast callable with api method froma anywhere
 */
import React, { useEffect } from "react";
import { Component, Text, View, Animated, Dimensions } from 'react-native';
import {Styles} from "./Styles"
import { CommonStyle } from "../../styles";
import RootSiblings from 'react-native-root-siblings';

const Toast = props => {
    let animatedValue = new Animated.Value(0);
    const { message="", delay=3000, textStyle={}, containerStyle={}, type="default" } = props;
      const callToast = () => {
        Animated.timing(animatedValue, { toValue: 1, duration: 700, useNativeDriver: true, delay}).start()
      }
      useEffect(()=>{
        callToast()
      },[])
      let animation = animatedValue.interpolate({
        inputRange: [0, .3, 1],
        outputRange: [-70, -10, 0]
      })
    return (
        <View>
            <Animated.View  style={[Styles.toastView, type==="error" && Styles.redToast, CommonStyle.paddingH10, 
                                    CommonStyle.jcenter, containerStyle, {transform: [{ translateY: animation }]}]}>
                <Text style={[CommonStyle.text, Styles.toastText, textStyle]}>
                    { message }
                </Text>
            </Animated.View>
        </View>
    )
}
const showToast = props => {
    const {delay = 3000} = props;
    let sibling = new RootSiblings(<Toast {...props}/>);
    setTimeout(() => {
        sibling.destroy()
    }, delay+1000);
}
export default props =>showToast(props)