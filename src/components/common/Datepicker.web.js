import React, { useState } from "react";
import { TouchableOpacity, View, Text, Platform } from "react-native";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css"
import {isWeb} from "../../constants";
import {Styles} from "./Styles";
import {CommonStyle} from "../../styles";

let dateRef = null;
export default props => {
    const {value, inputStyle,placeholder, containerStyle, onChangeDate, minDate, maxDate, error} = props;
    const [visible, handleDates] = useState(false);
    const {flex1, paddingV20} = CommonStyle;
    const handleConfirm = date => {
      handleDates(false);
      onChangeDate(date&&date.toISOString());
  }
  const onPressDate = () => {
    dateRef &&  dateRef.setOpen(true);
    handleDates(true)
  }
  const maximumDate = maxDate?{maxDate}:{};
  const minimumDate = minDate?{minDate}:{};
    return (
      <View style={[CommonStyle.padding10]}>
        <View style={[ Styles.formTextWrap, containerStyle]}>
            <TouchableOpacity onPress={()=>onPressDate()}
              style={[ flex1, CommonStyle.paddingL20, inputStyle, CommonStyle.jcenter, isWeb?Styles.webInput:{}]}>
                <Text style={[CommonStyle.text, Styles.formTextInputContainer,!value?Styles.datepickerPlaceholder:{}]}>{value?moment(value).format("DD-MMM-YYYY"):placeholder}</Text>
            </TouchableOpacity>
        </View>
        <div className="datePickerWrapper">
          <DatePicker
            ref={ref=>dateRef=ref}
            onChange={handleConfirm}
            {...maximumDate}
            {...minimumDate}
          />
        </div>
        
        {error&&<Text style={[CommonStyle.text, Styles.errorInputText, CommonStyle.paddingH10]}>{error}</Text>}
      </View>
  );
}