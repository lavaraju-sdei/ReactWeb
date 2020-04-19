// @ts-nocheck
import React from 'react';
import {Image, Text, View} from 'react-native';
import {discount} from '../../assets';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {Styles} from './styles';

export default props => {
  const {dashboard, redeemPoints} = Strings;
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
          {dashboard.offers}
        </Text>
        <View style={CommonStyle.width10} />
        <Image style={Styles.icons} resizeMode="contain" source={discount} />
      </View>
      <View style={[Styles.hairline]} />
      <View style={[CommonStyle.center, CommonStyle.paddingV20]}>
        <Text style={[CommonStyle.text, Styles.redeemText]}>
          {redeemPoints.redeemPointsInfo}
        </Text>
      </View>
    </View>
  );
};
