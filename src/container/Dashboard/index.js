// @ts-nocheck
import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Styles} from './styles';
import {CommonStyle} from '../../styles';
import {Strings, isWeb} from '../../constants';
import {SafeView, Wrapper, Button, Scroll} from '../../components';
import {logOut, changeRoute} from './bl';
import PointsHeader from '../../components/shared/PointsHeader';
import {
  promotionalEvents,
  discount,
  redeemPoints,
  pointsHistory,
} from '../../assets';

const {dashboard, auth} = Strings;
const data = [
  {
    path: 'RedeemPoints',
    title: dashboard.redeemPoints,
    image: redeemPoints,
    subTitle1: dashboard.redeemPointsText1,
    subTitle2: dashboard.redeemPointsText2,
  },
  {
    path: 'PromotionalEvents',
    title: dashboard.promotionalEvents,
    image: promotionalEvents,
    subTitle1: dashboard.promotionalEventsText1,
    subTitle2: dashboard.promotionalEventsText2,
  },
  {
    path: 'Offers',
    title: dashboard.offers,
    image: discount,
    subTitle1: dashboard.offersText1,
    subTitle2: dashboard.offersText2,
  },
  {
    path: 'PointsHistory',
    title: dashboard.pointsHistory,
    image: pointsHistory,
    subTitle1: dashboard.pointsHistoryText1,
    subTitle2: dashboard.pointsHistoryText2,
  },
];

export default props => {
  const loader = false; // temp
  const {componentId} = props;
  const {
    user: {EarnedCheckInPoints, EarnedCheckOutPoints},
  } = useSelector(({user}) => user);
  return (
    <SafeView>
      <View style={[Styles.container, CommonStyle.flex1]}>
        <Wrapper>
          <View style={[CommonStyle.row]}>
            <PointsHeader
              title={dashboard.earnedCheckInPoints}
              points={EarnedCheckInPoints}
            />
            <View style={Styles.extraWidth} />
            <PointsHeader
              invert
              title={dashboard.earnedCheckOutPoints}
              points={EarnedCheckOutPoints}
            />
          </View>
          <FlatList
            data={data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  CommonStyle.flexp5,
                  CommonStyle.marginV10,
                  CommonStyle.center,
                ]}
                activeOpacity={1}
                onPress={() => changeRoute(componentId, item.path)}>
                <View
                  style={[
                    Styles.box,
                    isWeb && Styles.boxWeb,
                    CommonStyle.shadow,
                    CommonStyle.center,
                  ]}>
                  <Image
                    style={Styles.icons}
                    resizeMode="contain"
                    source={item.image}
                  />
                  <Text
                    style={[
                      CommonStyle.text,
                      Styles.innerText,
                      CommonStyle.paddingV10,
                    ]}>
                    {item.title}
                  </Text>
                  <View style={[Styles.hairline, CommonStyle.paddingB10]} />
                  <Text
                    style={[
                      CommonStyle.text,
                      Styles.outerText,
                      CommonStyle.paddingT10,
                    ]}>
                    {item.subTitle1}
                  </Text>
                  <Text
                    style={[
                      CommonStyle.text,
                      Styles.outerText,
                      CommonStyle.paddingB5,
                    ]}>
                    {item.subTitle2}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <Button
            loader={loader}
            onPress={() => changeRoute(componentId, 'Profile')}
            name={dashboard.profile}
            textStyle={Styles.buttonText}
          />
          <Button
            loader={loader}
            onPress={() => logOut()}
            name={auth.logout}
            textStyle={Styles.buttonText}
          />
        </Wrapper>
      </View>
    </SafeView>
  );
};
