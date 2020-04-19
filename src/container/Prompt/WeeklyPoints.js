// @ts-nocheck

import React from 'react';
import {View, Text} from 'react-native';
import {Styles} from './styles';
import {CommonStyle} from '../../styles';
import {Gradient, Loader} from '../../components';
import {Strings} from '../../constants';

export default ({points, loader = false}) => {
  const {prompt} = Strings;
  return (
    <Gradient style={[CommonStyle.row, Styles.grad]}>
      {loader && <Loader style={[Styles.loader, CommonStyle.center]} />}
      {points &&
        points.length > 0 &&
        points.map((item, i) => (
          <View
            key={`${i}-view`}
            style={[
              CommonStyle.row,
              Styles.gradView,
              item.WeekDay === 'Wednesday' && Styles.bigGrad,
            ]}>
            {i !== 0 && i !== points.length && <View style={Styles.vLine} />}
            <View style={Styles.pointCenterView}>
              <View style={[CommonStyle.center, Styles.innverPointsView]}>
                <View
                  style={[
                    CommonStyle.center,
                    Styles.round,
                    CommonStyle.marginV10,
                  ]}>
                  <Text style={[CommonStyle.text, Styles.xPontsText]}>{`${
                    item.RewardMultiple
                  }x`}</Text>
                </View>
                <Text
                  style={[
                    CommonStyle.text,
                    CommonStyle.paddingV5,
                    Styles.pointsonText,
                  ]}>
                  {prompt.pointsOn}
                </Text>
                <Text style={[CommonStyle.text, Styles.daysText]}>
                  {item.WeekDay}
                </Text>
              </View>
            </View>
          </View>
        ))}
    </Gradient>
  );
};
