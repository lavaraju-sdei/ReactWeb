// @ts-nocheck
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon, SafeView, Wrapper} from '../../components';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {goBack} from './bl';
import {Styles} from './styles';

export default props => {
  const {error} = Strings;
  const {componentId} = props;
  return (
    <SafeView>
      <View style={[Styles.container, CommonStyle.flex1]}>
        <Wrapper>
          <View style={[CommonStyle.center, Styles.main]}>
            <Icon
              type="Ionicons"
              name="md-cloudy"
              size={100}
              style={Styles.errorIcon}
            />
            <Text style={[CommonStyle.text, Styles['404Error']]}>
              {`${error['404']} ${error['error']}`}
            </Text>
            <Text style={[CommonStyle.text, Styles.notFountText]}>
              {error.pageNotFound}
            </Text>
          </View>
          <TouchableOpacity
            style={[CommonStyle.center, CommonStyle.row, Styles.goBackButton]}
            onPress={() => goBack(componentId)}
            activeOpacity={1}>
            <Icon
              type="Ionicons"
              name="ios-arrow-round-back"
              style={Styles.icon}
            />
            <Text style={[CommonStyle.text, Styles.buttonText]}>
              {error.goBack}
            </Text>
            <View style={Styles.emptyView} />
          </TouchableOpacity>
        </Wrapper>
      </View>
    </SafeView>
  );
};
