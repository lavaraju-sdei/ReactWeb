// @ts-nocheck
import React from 'react';
import {Image, Text, View} from 'react-native';
import {discount} from '../../assets';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {Styles} from './styles';

export default props => {
  const {promotionalEvents} = Strings;
  const {componentId} = props;
  return (
    <View style={[CommonStyle.shadow, CommonStyle.center, Styles.headBox]}>
      <View
        style={[
          CommonStyle.row,
          CommonStyle.center,
          CommonStyle.paddingV10,
          Styles.headTextBox,
        ]}>
        <Text style={[CommonStyle.text, Styles.heading]}>
          {promotionalEvents.weeklyEvents}
        </Text>
        <View style={CommonStyle.width10} />
        <Image style={Styles.icons} resizeMode="contain" source={discount} />
      </View>
      <View style={[Styles.hairline]} />
      <View style={[CommonStyle.center, CommonStyle.paddingV20]}>
        <Text
          style={[CommonStyle.text, Styles.redeemText, CommonStyle.paddingB5]}>
          {promotionalEvents.weeklyEventSubText1}
        </Text>
        <Text style={[CommonStyle.text, Styles.redeemText]}>
          {promotionalEvents.weeklyEventSubText2}
        </Text>
      </View>
    </View>
  );
};
