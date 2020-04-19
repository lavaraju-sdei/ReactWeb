// @ts-nocheck
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Gradient, Icon} from '../../components';
import {colors, Strings} from '../../constants';
import {heightScale} from '../../helpers';
import {CommonStyle} from '../../styles';
import Styles from './styles';

export default ({active = 0, toggle, onMenu, onToggle}) => {
  const {
    admin: {userMngmt, rolesMngmt, rewardsMngmt, rewardAct, storeMngmt},
  } = Strings;
  const buttons = [
    {title: userMngmt, icon: 'user-manage', size: 8},
    {title: rewardsMngmt, icon: 'rewards-manage', size: 4},
    {title: rolesMngmt, icon: 'roles-manage', size: 6},
    {title: rewardAct, icon: 'roles-manage', size: 6},
    {title: storeMngmt, icon: 'rewards-manage', size: 4},
  ];
  return (
    <Gradient
      style={[CommonStyle.flexp2, Styles.sidemenu, CommonStyle.acenter]}>
      <TouchableOpacity
        style={[CommonStyle.row, Styles.toggle, CommonStyle.paddingV5]}
        activeOpacity={1}
        onPress={() => onToggle(!toggle)}>
        <Icon
          name={toggle ? 'right-menu' : 'left-menu'}
          color={colors.White}
          size={heightScale(heightScale(6))}
        />
      </TouchableOpacity>
      <View style={Styles.extraHeight} />
      {buttons.map((item, index) => (
        <TouchableOpacity
          key={`${index}-sdemenu-buttons`}
          activeOpacity={1}
          onPress={() => onMenu(index)}
          style={[
            CommonStyle.row,
            CommonStyle.marginV10,
            CommonStyle.padding5,
            CommonStyle.paddingV10,
            CommonStyle.acenter,
            // CommonStyle.center,
            Styles.sideButton,
            active === index && Styles.activeMenu,
          ]}>
          <Icon
            name={item.icon}
            color={active === index ? colors.Blue : colors.White}
            size={heightScale(item.size)}
          />
          <Text
            style={[
              CommonStyle.text,
              Styles.buttonText,
              active === index && Styles.activeButtonText,
              CommonStyle.padding10,
            ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </Gradient>
  );
};
