import React from 'react';
import {View, Image, Text} from 'react-native';
import {Styles} from './styles';
import {CommonStyle} from '../../styles';
import {colors} from '../../constants';
import {fadedGift, medal1, medal2} from '../../assets';
import {Gradient} from '..';

export default ({componentId, invert = false, points, title}) => {
  const color = !invert ? colors.blueGradient : colors.blueGradientIn;
  const source = !invert ? medal1 : medal2;
  return (
    <View
      style={[CommonStyle.paddingV10, CommonStyle.center, CommonStyle.flexp5]}>
      <Gradient color={color} style={[Styles.pointsHeadView]}>
        <View style={[CommonStyle.row]}>
          <View
            style={[
              Styles.imageView,
              CommonStyle.center,
              CommonStyle.paddingV10,
            ]}>
            <Image source={source} style={Styles.medalImage} />
          </View>
          <View
            style={[Styles.imageView, CommonStyle.center, CommonStyle.flex1]}>
            <View style={[Styles.absolute, CommonStyle.paddingH5]}>
              <Text style={[CommonStyle.text, Styles.pointsTitle]}>
                {title}
              </Text>
              <Text style={[CommonStyle.text, Styles.pointsText]}>
                {points}
              </Text>
            </View>
            <View style={Styles.relative}>
              <Image
                source={fadedGift}
                style={[Styles.medalImage, CommonStyle.margin3]}
              />
            </View>
          </View>
        </View>
      </Gradient>
    </View>
  );
};
