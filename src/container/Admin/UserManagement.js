import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Strings, colors} from '../../constants';
import {Gradient,DataTable} from '../../components';
import {CommonStyle} from '../../styles';
import Styles from './styles';
const users = [
  {fullName: 'Rishabh', phone: '973484734', role: 'User', action: 'Make admin'},
  {
    fullName: 'Prashant',
    phone: '973484734',
    role: 'User',
    action: 'Make admin',
  },
  {fullName: 'Rishabh', phone: '973484734', role: 'User', action: 'Make admin'},
  {
    fullName: 'Prashant',
    phone: '973484734',
    role: 'User',
    action: 'Make admin',
  },
  {fullName: 'Rishabh', phone: '973484734', role: 'User', action: 'Make admin'},
  {
    fullName: 'Prashant',
    phone: '973484734',
    role: 'User',
    action: 'Make admin',
  },
  {fullName: 'Rishabh', phone: '973484734', role: 'User', action: 'Make admin'},
  {
    fullName: 'Prashant',
    phone: '973484734',
    role: 'User',
    action: 'Make admin',
  },
];
const admins = [
  {
    fullName: 'Prashant',
    phone: '973484734',
    role: 'Admin',
  },
  {
    fullName: 'Prashant',
    phone: '973484734',
    role: 'Admin',
  },
  {
    fullName: 'Prashant',
    phone: '973484734',
    role: 'Admin',
  },
];

export default () => {
  const {
    admin: {user, admin},
    tableHeaders:{usermanagementUserHeaders,userManagementAdminHeaders}
  } = Strings;
  const buttons = [{title: user}, {title: admin}];
  const [active, onTab] = useState(0);
  getActiveTap = () => {
    if (active === 0) return users;
    else return admins;
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
      <View style={[CommonStyle.padding15]}>
        {(active === 0) ? (
          <DataTable headers={usermanagementUserHeaders} data={getActiveTap()} />
        ):(
          <DataTable headers={userManagementAdminHeaders} data={getActiveTap()} />
        )}
      
  
      </View>
    </View>
  );
};
