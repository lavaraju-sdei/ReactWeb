import React from 'react';
import {Image, Text, View} from 'react-native';
import {gift} from '../../assets';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {Styles} from './styles';

export default props => {
  const {dashboard, redeemPoints} = Strings;
  return (
    <View style={[CommonStyle.shadow, CommonStyle.center, Styles.headBox]}>
      <View
        style={[CommonStyle.row, CommonStyle.paddingV5, Styles.headTextBox]}>
        <View style={{width: '20%'}} />
        <View style={[CommonStyle.center, {width: '60%'}]}>
          <Text style={[CommonStyle.text, Styles.heading]}>
            {dashboard.redeemPoints}
          </Text>
        </View>
        <View style={{width: '20%'}}>
          <Image style={Styles.icons} resizeMode="contain" source={gift} />
        </View>
      </View>
      <View style={[Styles.hairline]} />
      <View style={[CommonStyle.center, CommonStyle.paddingV10]}>
        <Text style={[CommonStyle.text, Styles.redeemText]}>
          {redeemPoints.redeemPointsInfo}
        </Text>
      </View>
    </View>
  );
};
