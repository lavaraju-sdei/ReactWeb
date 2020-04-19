// @ts-nocheck
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {NoRecord} from '../../components';
import {CommonStyle} from '../../styles';
import {Styles} from './styles';

export default ({history = [], onPoints}) => {
  return history && history.length > 0 ? (
    <FlatList
      data={history}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      style={[Styles.scroll, CommonStyle.marginT10]}
      renderItem={({item}) => (
        <TouchableOpacity
          onPoints={() => onPoints(item)}
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
                item.PointsEarned > 99 && CommonStyle.paddingV10,
              ]}>
              ${item.PointsEarned}
            </Text>
          </View>
          <Text
            style={[CommonStyle.text, Styles.typeText, CommonStyle.padding15]}>
            {item.PointsEarnedBy}
          </Text>
        </TouchableOpacity>
      )}
    />
  ) : (
    <NoRecord />
  );
};
