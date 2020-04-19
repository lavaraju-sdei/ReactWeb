// @ts-nocheck
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Styles} from './styles';
import {CommonStyle} from '../../styles';
import moment from 'moment';
import {Strings} from '../../constants';

export default ({
  label = '',
  item,
  invert = false,
  datetime = false,
  onPoints,
  //   noPointsToRedeem,
}) => {
  const {
    common: {point, points},
  } = Strings;
  return (
    <TouchableOpacity
      onPress={() => onPoints && onPoints(item)}
      activeOpacity={1}
      style={[CommonStyle.paddingH15, CommonStyle.marginV10]}>
      <View style={[CommonStyle.center, CommonStyle.shadow, Styles.box]}>
        <View
          style={[
            invert ? Styles.roundIn : Styles.round,
            CommonStyle.center,
            CommonStyle.marginT10,
          ]}>
          <Text
            style={[CommonStyle.text, Styles.xPontsText, CommonStyle.padding5]}>
            {`${item.point > 99 ? '99+' : item.point}`}
            {` ${item.point == 1 ? point : points}`}
          </Text>
        </View>
        <Text
          style={[CommonStyle.text, Styles.typeText, CommonStyle.paddingV15]}>
          {label}
        </Text>
        {datetime && (
          <Text
            style={[CommonStyle.text, CommonStyle.paddingV10, Styles.dateText]}>
            {moment(item.PointEarnedDateTime).format('DD MMM YYYY hh:mm a')}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
