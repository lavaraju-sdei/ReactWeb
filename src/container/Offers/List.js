// @ts-nocheck
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {NoRecord} from '../../components';
import {CommonStyle} from '../../styles';
import {Styles} from './styles';

export default ({offers = [], onPoints}) => {
  return offers && offers.length > 0 ? (
    <FlatList
      data={offers}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      style={[Styles.scroll, CommonStyle.marginT10]}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => onPoints(item)}
          activeOpacity={1}
          style={[
            CommonStyle.center,
            CommonStyle.shadow,
            Styles.box,
            CommonStyle.marginV10,
            CommonStyle.flex1,
            CommonStyle.marginH5,
          ]}>
          <View
            style={[Styles.round, CommonStyle.center, CommonStyle.marginT10]}>
            <Text
              style={[
                CommonStyle.text,
                Styles.xPontsText,
                CommonStyle.padding5,
                item.RewardAmount > 99 && CommonStyle.paddingV100,
              ]}>
              ${item.RewardAmount}
            </Text>
          </View>
          <Text
            style={[CommonStyle.text, Styles.typeText, CommonStyle.padding15]}>
            {item.OfferName}
          </Text>
        </TouchableOpacity>
      )}
    />
  ) : (
    <NoRecord />
  );
};
