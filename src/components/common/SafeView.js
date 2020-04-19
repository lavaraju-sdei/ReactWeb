// @ts-nocheck
import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Image, Platform} from 'react-native';
import {Styles} from './Styles';
import {Icon} from '../';
import {CommonStyle} from '../../styles';
import {logo, footer, footerLeft, footerRight} from '../../assets';
import {isWeb} from '../../constants';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[Styles.statusBar, {backgroundColor}]}>
    <View style={[Styles.statusBar]} />
  </View>
);
const Header = props => {
  return (
    <View
      style={[
        Styles.header,
        CommonStyle.row,
        CommonStyle.paddingL10,
        props.headerStyle,
      ]}>
      {props.onBack ? (
        <TouchableOpacity
          onPress={() => props.onBack()}
          style={[
            Styles.headerBackButton,
            CommonStyle.center,
            CommonStyle.flexp2,
          ]}>
          <Icon
            type="Ionicons"
            name="ios-arrow-round-back"
            style={Styles.leftIcon}
          />
        </TouchableOpacity>
      ) : (
        <View style={CommonStyle.flexp2} />
      )}
      <View style={[CommonStyle.center, CommonStyle.flexp6]}>
        <Image source={logo} style={[Styles.logo, isWeb && Styles.webLogo]} />
      </View>
      <View style={CommonStyle.flexp2} />
    </View>
  );
};
export default props => {
  const {
    statusBackground = '#FFF',
    title = '',
    theme = 'light-content',
    header = true,
    onBack,
    containerStyle = {},
    childStyle = {},
  } = props;
  const headerProps = {onBack, title};
  return isWeb ? (
    <View style={[CommonStyle.container, containerStyle]}>
      {header && <Header {...headerProps} />}
      <View style={CommonStyle.paddingV20} />
      <View style={[CommonStyle.flex1, Styles.child]}>
        <View style={[CommonStyle.flex1, childStyle]}>{props.children}</View>
        <View style={[CommonStyle.row, Styles.imageWebView]}>
          <Image
            source={footerLeft}
            style={[Styles.footerWeb]}
            resizeMode="cover"
          />
          <View style={CommonStyle.flex1} />
          <Image
            source={footerRight}
            style={[Styles.footerWeb]}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  ) : (
    <View
      style={[
        CommonStyle.container,
        CommonStyle.flex1,
        Styles.safeContainer,
        containerStyle,
      ]}>
      <MyStatusBar backgroundColor={statusBackground} barStyle={theme} />
      {header && <Header {...headerProps} />}
      <View style={[CommonStyle.flex1, CommonStyle.paddingH10]}>
        {props.children}
      </View>
      <Image source={footer} resizeMode="stretch" style={Styles.footer} />
    </View>
  );
};
