// @ts-nocheck
import React from 'react';
import {View, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import {Styles} from './styles';
import {CommonStyle} from '../../styles';
import {Strings} from '../../constants';
import {NoRecord} from '../../components';
import PointsHeader from './PointsHeader';
import List from './List';

let scroll = null;
export default ({
  onPoints,
  // noPointsToRedeem,
  onloadmore,
  loader_m = false,
  load,
  datetime = false,
  ...props
}) => {
  const {redeemPoints, auth} = Strings;
  const {data = {}, totalcheckin, totalcheckout} = props.data;
  const {left = [], right = []} = data;

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 5;
  };
  return (
    <View style={[CommonStyle.paddingV5]}>
      {data && (data.left.length > 0 || data.right.length > 0) ? (
        <ScrollView
          style={Styles.scroll}
          showsVerticalScrollIndicator={false}
          ref={ref => (scroll = ref)}
          scrollEventThrottle={400}
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent) && onloadmore && load) {
              onloadmore();
            }
          }}>
          <View style={[CommonStyle.row, CommonStyle.jcenter]}>
            <PointsHeader
              title={redeemPoints.checkInPoints}
              points={totalcheckin}
            />
            <View style={Styles.extraWidth} />
            <PointsHeader
              invert
              title={redeemPoints.checkOutPoints}
              points={totalcheckout}
            />
          </View>
          <View style={CommonStyle.row}>
            <View style={[CommonStyle.flexp5]}>
              {left.map((item, i) => (
                <List
                  key={`${i}-left`}
                  onPoints={onPoints}
                  // noPointsToRedeem={noPointsToRedeem}
                  datetime={datetime}
                  type={item.type}
                  label={auth.checkin}
                  item={item}
                />
              ))}
            </View>
            <View style={Styles.extraWidth} />
            <View style={[CommonStyle.flexp5]}>
              {right.map((item, i) => (
                <List
                  key={`${i}-right`}
                  onPoints={onPoints}
                  // noPointsToRedeem={noPointsToRedeem}
                  datetime={datetime}
                  invert
                  type={item.type}
                  label={auth.checkout}
                  item={item}
                />
              ))}
            </View>
          </View>
          <View
            style={[CommonStyle.center, CommonStyle.paddingV5, Styles.footer]}>
            {loader_m && <ActivityIndicator style={Styles.loader} />}
          </View>
        </ScrollView>
      ) : (
        <NoRecord />
      )}
    </View>
  );
};
