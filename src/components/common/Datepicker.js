import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {isWeb} from "../../constants";
import moment from "moment";
import {Styles} from "./Styles";
import {CommonStyle} from "../../styles";

export default props => {
    const {value, inputStyle,placeholder, containerStyle, onChangeDate, maxDate, minDate, error} = props;
    const [visible, handleDates] = useState(false);
    const {flex1, paddingV20} = CommonStyle;
    const handleConfirm = date => {
        handleDates(false);
        onChangeDate(date&&date.toISOString());
    }
    const maximumDate = maxDate?{maximumDate:maxDate}:{};
    const minimumDate = minDate?{minimumDate:minDate}:{};
    return (
      <View style={[CommonStyle.padding10]}>
        <View style={[ Styles.formTextWrap, containerStyle]}>
            <TouchableOpacity onPress={()=>handleDates(true)}
              style={[ flex1, CommonStyle.paddingL20, CommonStyle.jcenter, inputStyle, isWeb?Styles.webInput:{}]}>
                <Text style={[CommonStyle.text, Styles.formTextInputContainer, !value?Styles.datepickerPlaceholder:{}]}>{value?moment(value).format("DD-MMM-YYYY"):placeholder}</Text>
            </TouchableOpacity>
        </View>
        <DateTimePickerModal
            isVisible={visible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={()=>handleDates(false)}
            {...maximumDate}
            {...minimumDate}
        />
        {error&&<Text style={[CommonStyle.text, Styles.errorInputText, CommonStyle.paddingH10]}>{error}</Text>}
      </View>
  );
}