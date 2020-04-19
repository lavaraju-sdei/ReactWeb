// @ts-nocheck
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Gradient, Icon} from '../../components';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {changeRoute} from './bl';
import {Styles} from './styles';
export default props => {
  const {auth} = Strings;
  return (
    <View>
      <Gradient style={[Styles.button, CommonStyle.paddingR5, Styles.gradient]}>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            Styles.button,
            CommonStyle.paddingL20,
            CommonStyle.acenter,
            CommonStyle.row,
          ]}
          onPress={() => changeRoute(props.componentId, 'SignIn')}>
          <Text style={[CommonStyle.text, Styles.checkinText]}>
            {auth.checkin}
          </Text>
          <View style={CommonStyle.flex1} />
          <View style={[Styles.arrowViewRight, CommonStyle.center]}>
            <Icon
              type="Ionicons"
              name="ios-arrow-round-forward"
              style={Styles.icon}
            />
          </View>
        </TouchableOpacity>
      </Gradient>
      {/* <View style={CommonStyle.paddingV5} /> */}
      <Gradient style={[Styles.button, CommonStyle.paddingL5, Styles.gradient]}>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            Styles.button,
            CommonStyle.paddingR20,
            CommonStyle.acenter,
            CommonStyle.row,
          ]}
          onPress={() => changeRoute(props.componentId, 'Checkout')}>
          <View style={[Styles.arrowViewLeft, CommonStyle.center]}>
            <Icon
              type="Ionicons"
              name="ios-arrow-round-back"
              style={Styles.icon}
            />
          </View>
          <View style={CommonStyle.flex1} />
          <Text style={[CommonStyle.text, Styles.checkinText]}>
            {auth.checkout}
          </Text>
        </TouchableOpacity>
      </Gradient>
    </View>
  );
};
