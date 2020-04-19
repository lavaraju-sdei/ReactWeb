// @ts-nocheck
import React, {useState, useEffect} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Styles from './styles';
import {CommonStyle} from '../../styles';
import {Strings, colors} from '../../constants';
import {SafeView, Icon} from '../../components';
import SideMenu from './SideMenu';
import {heightScale} from '../../helpers';
import UserManagement from './UserManagement';
import RewardsManagement from './RewardsManagement';
import RolesManagement from './RolesManagement';
import RewardActivity from './RewardActivity';
import StoreManagement from './StoreManagement';

const components = [
  <UserManagement />,
  <RewardsManagement />,
  <RolesManagement />,
  <RewardActivity />,
  <StoreManagement />,
];
export default ({}) => {
  const [toggle, onToggle] = useState(false);
  const [active, onMenu] = useState(0);
  return (
    <SafeView>
      {/* <View style={Styles.hairline}/> */}
      <ScrollView>
        <View
          style={[Styles.container, CommonStyle.center, CommonStyle.marginT10]}>
          <View style={[CommonStyle.row, Styles.body, CommonStyle.shadow]}>
            {toggle ? (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => onToggle(!toggle)}>
                <Icon
                  name={'right-menu'}
                  color={colors.Placehoder}
                  size={heightScale(heightScale(6))}
                />
              </TouchableOpacity>
            ) : (
              <SideMenu
                toggle={toggle}
                onToggle={onToggle}
                active={active}
                onMenu={onMenu}
              />
            )}
            <View style={[!toggle ? CommonStyle.flexp8 : CommonStyle.flex1]}>
              {components[active]}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};
