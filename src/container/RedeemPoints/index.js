// @ts-nocheck
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Styles} from './styles';
import {CommonStyle} from '../../styles';
import {Strings} from '../../constants';
import {SafeView, Wrapper, Button, Loader, PointsList} from '../../components';
import {
  goBack,
  onPoints,
  // noPointsToRedeem,
  getRedeemPoints,
  formatdata,
} from './bl';
import HeaderBox from './HeaderBox';
// import PointsHeader from '../../components/shared/PointsHeader';

export default ({componentId}) => {
  const {loader_r = false, redeem = {}} = useSelector(
    ({dashboard}) => dashboard,
  );
  const points = formatdata(redeem);
  // let {EarnedCheckInPoints, EarnedCheckOutPoints} = redeem;
  useEffect(() => {
    getRedeemPoints();
  }, []);
  const {common, redeemPoints} = Strings;
  return (
    <SafeView>
      {loader_r ? (
        <Loader style={[CommonStyle.flex1, CommonStyle.center]} />
      ) : (
        <View style={[CommonStyle.paddingT10, CommonStyle.flex1]}>
          <Wrapper>
            <HeaderBox />
            {/* <View style={[CommonStyle.row]}>
              <PointsHeader
                title={redeemPoints.earnedCheckInPoints}
                points={EarnedCheckInPoints}
              />
              <View style={Styles.extraWidth} />
              <PointsHeader
                invert
                title={redeemPoints.earnedCheckOutPoints}
                points={EarnedCheckOutPoints}
              />
            </View> */}
            <PointsList
              data={points}
              onPoints={onPoints}
              // noPointsToRedeem={noPointsToRedeem}
            />
            <Button
              onPress={() => goBack(componentId)}
              name={common.goBack}
              textStyle={Styles.buttonText}
            />
          </Wrapper>
        </View>
      )}
    </SafeView>
  );
};
