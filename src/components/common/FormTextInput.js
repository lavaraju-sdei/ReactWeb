import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {CommonStyle} from '../../styles';
import {colors, isWeb} from '../../constants';
import {Styles} from './Styles';

export default ({
  containerStyle,
  inputStyle,
  label,
  error = null,
  ...input
}) => {
  const {flex1, paddingL20, text} = CommonStyle;
  return (
    <View style={[CommonStyle.padding10]}>
      <View
        style={[
          Styles.formTextWrap,
          error ? Styles.formError : {},
          containerStyle,
        ]}>
        <TextInput
          {...input}
          style={[
            flex1,
            text,
            Styles.formTextInputContainer,
            paddingL20,
            inputStyle,
            isWeb && Styles.webInput,
            // {backgroundColor: colors.White},
          ]}
          placeholderTextColor={colors.lightBlue2}
        />
      </View>
      {error && (
        <Text
          style={[
            CommonStyle.text,
            Styles.errorInputText,
            CommonStyle.paddingH10,
          ]}>
          {error}
        </Text>
      )}
    </View>
  );
};
