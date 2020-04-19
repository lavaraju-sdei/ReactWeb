import React, {useState, useRef, createRef} from "react";
import {View, TextInput, Platform} from "react-native";
import {heightScale} from "../../helpers/";
import {isWeb} from "../../constants";
import {Styles} from "./Styles";
import {CommonStyle} from "../../styles";

const digits = [];
export default props => {
    const {count=4, onChange} = props;
    const array = new Array(count).fill(0)
    const ref = useRef(array.map(() => createRef()));
    const onChangeT = (t,i) => {
        digits[i] = t
        // setDigits(digits);
        if(i < count)
        ref&&ref.current&&ref.current[i+1]&&ref.current[i].current&&ref.current[i+1].current.focus();
        const code = digits&&digits.filter(item=>item.trim());
        // if(count === code.length)
            onChange(code.join(""))
    }
    const textInput = (_, index) => (
        <View key={index + "view"} style={[Styles.otpInputView, CommonStyle.marginH5, CommonStyle.center]}>
            <TextInput
                ref={ref.current[index]}
                style={[ CommonStyle.text, Styles.otpInput, isWeb&&Styles.webInput]} 
                placeholder ={'0'}
                maxLength={1}
                onChangeText = {t=>t.length<=1&&onChangeT(t, index)}
                keyboardType={"number-pad"}
            />
        </View>
    )
    return (
        <View style={[CommonStyle.row, CommonStyle.center, CommonStyle.paddingH5]}>
            {array.map(textInput)}
        </View>
    )
}