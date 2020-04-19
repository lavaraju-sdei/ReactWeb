import React from 'react';
import {Image, Text, View} from 'react-native';
import {NoRecord} from '../../components';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {Styles} from './styles';

export default ({data = {}}) => {
  const {redeemPoints} = Strings;
  return (
    <View style={[CommonStyle.marginV10]}>
      {data && Object.keys(data).length > 0 ? (
        <View
          style={[
            CommonStyle.center,
            Styles.box,
            CommonStyle.shadow,
            CommonStyle.marginV10,
            CommonStyle.marginH5,
          ]}>
          <View
            style={[
              Styles.imagePrize,
              CommonStyle.paddingV5,
              CommonStyle.paddingT5,
            ]}>
            <Image
              source={{uri: data.PromotionImage}}
              style={CommonStyle.flex1}
              resizeMode="contain"
            />
          </View>

          <View
            style={[Styles.round, CommonStyle.center, CommonStyle.marginV10]}>
            <Text
              style={[
                CommonStyle.text,
                Styles.xPontsText,
                CommonStyle.padding5,
                data.Prize > 99 && CommonStyle.paddingV10,
              ]}>
              ${data.Prize}
            </Text>
          </View>
          <Text
            style={[CommonStyle.text, Styles.typeText, CommonStyle.paddingV10]}>
            {data.PromotionDetails}
          </Text>
        </View>
      ) : (
        <NoRecord />
      )}
    </View>
  );
};
