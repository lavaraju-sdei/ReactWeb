// @ts-nocheck
import React from 'react';
import {Image, Text, View} from 'react-native';
import {gift} from '../../assets';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {Styles} from './styles';

export default props => {
  const {prompt} = Strings;
  return (
    <View
      style={[
        CommonStyle.shadow,
        CommonStyle.center,
        CommonStyle.borderRadius,
      ]}>
      <View
        style={[
          CommonStyle.center,
          CommonStyle.paddingV10,
          CommonStyle.row,
          Styles.howWorksView,
        ]}>
        <Text style={(CommonStyle.text, Styles.howWorksText)}>
          {prompt.howItWorks}
        </Text>
        <Image source={gift} style={Styles.iconImage} />
      </View>
      <View style={[CommonStyle.paddingV10]} />
      <Text
        style={
          (CommonStyle.text, CommonStyle.paddingV20, Styles.howWorksTextSteps)
        }>
        {prompt.howItWorks1}
      </Text>
      <Text
        style={
          (CommonStyle.text, CommonStyle.paddingV20, Styles.howWorksTextSteps)
        }>
        {prompt.howItWorks2}
      </Text>
      <Text
        style={
          (CommonStyle.text, CommonStyle.paddingV20, Styles.howWorksTextSteps)
        }>
        {prompt.howItWorks3}
      </Text>
      <View style={[CommonStyle.paddingV10]} />
    </View>
  );
};
