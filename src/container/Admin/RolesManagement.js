// @ts-nocheck
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Gradient, DataTable} from '../../components';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import Styles from './styles';
``;
const users = [
  {firstName: 'Rishabh', lastName: 'Gupta', phone: '973484734', role: 'User'},
  {firstName: 'Prashant', lastName: 'Sakar', phone: '973484734', role: 'User'},
  {firstName: 'Rishabh', lastName: 'Gupta', phone: '973484734', role: 'User'},
  {firstName: 'Prashant', lastName: 'Sakar', phone: '973484734', role: 'User'},
  {firstName: 'Rishabh', lastName: 'Gupta', phone: '973484734', role: 'User'},
  {firstName: 'Prashant', lastName: 'Sakar', phone: '973484734', role: 'User'},
  {firstName: 'Rishabh', lastName: 'Gupta', phone: '973484734', role: 'User'},
  {firstName: 'Prashant', lastName: 'Sakar', phone: '973484734', role: 'User'},
];
const admins = [
  {firstName: 'John', lastName: 'Deo', phone: '973484734', role: 'Admin'},
  {firstName: 'John', lastName: 'Deo', phone: '973484734', role: 'Admin'},
];
export default () => {
  const {
    admin: {user, admin},
    tableHeaders:{roleManagementUserHeaders, roleManagementAdminHeaders}
  } = Strings;
  const buttons = [{title: user}, {title: admin}];
  const [active, onTab] = useState(0);
  getActiveTap = () => {
    if (active) return admins;
    else return users;
  };
  return (
    <View style={[CommonStyle.flexp1, CommonStyle.padding15]}>
      <View style={[CommonStyle.row, {justifyContent: 'flex-start'}]}>
        {buttons.map((item, index) => (
          <Gradient style={[Styles.tabMenu, CommonStyle.marginH5]}>
            <TouchableOpacity
              key={`${index}-tabs-buttons`}
              activeOpacity={1}
              onPress={() => onTab(index)}
              style={[
                CommonStyle.padding15,
                active !== index && Styles.activeTab,
              ]}>
              <Text style={[active === index && Styles.activeTabText]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          </Gradient>
        ))}
      </View>
      <DataTable headers={active=== 0 ? roleManagementUserHeaders:roleManagementAdminHeaders} data={getActiveTap()} />
      
    </View>
  );
};
