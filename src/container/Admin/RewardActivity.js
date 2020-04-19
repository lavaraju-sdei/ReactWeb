import React from 'react';
import { Text, View } from 'react-native';
import {DataTable} from '../../components';
import {Strings} from '../../constants';
import { CommonStyle } from '../../styles';
import Styles from './styles';
const rewardsUsers = [
  {
    fullName: 'Rishabh Gupta',
    phone: '973484734',
    offerName: '10 points for 2$',
    dateClaimed: 'April 10, 2020',
    dateAccepted: 'April 13, 2020',
    acceptedBy: 'Prashant',
  },
  {
    fullName: 'Rishabh Gupta',
    phone: '973484734',
    offerName: '10 points for 2$',
    dateClaimed: 'April 10, 2020',
    dateAccepted: 'April 13, 2020',
    acceptedBy: 'Prashant',
  },
  {
    fullName: 'Rishabh Gupta',
    phone: '973484734',
    offerName: '10 points for 2$',
    dateClaimed: 'April 10, 2020',
    dateAccepted: 'April 13, 2020',
    acceptedBy: 'Prashant',
  },
  {
    fullName: 'Rishabh Gupta',
    phone: '973484734',
    offerName: '10 points for 2$',
    dateClaimed: 'April 10, 2020',
    dateAccepted: 'April 13, 2020',
    acceptedBy: 'Prashant',
  },
  {
    fullName: 'Rishabh Gupta',
    phone: '973484734',
    offerName: '10 points for 2$',
    dateClaimed: 'April 10, 2020',
    dateAccepted: 'April 13, 2020',
    acceptedBy: 'Prashant',
  },
  {
    fullName: 'Rishabh Gupta',
    phone: '973484734',
    offerName: '10 points for 2$',
    dateClaimed: 'April 10, 2020',
    dateAccepted: 'April 13, 2020',
    acceptedBy: 'Prashant',
  },
  {
    fullName: 'Rishabh Gupta',
    phone: '973484734',
    offerName: '10 points for 2$',
    dateClaimed: 'April 10, 2020',
    dateAccepted: 'April 13, 2020',
    acceptedBy: 'Prashant',
  },
  {
    fullName: 'Rishabh Gupta',
    phone: '973484734',
    offerName: '10 points for 2$',
    dateClaimed: 'April 10, 2020',
    dateAccepted: 'April 13, 2020',
    acceptedBy: 'Prashant',
  },
  {
    fullName: 'Rishabh Gupta',
    phone: '973484734',
    offerName: '10 points for 2$',
    dateClaimed: 'April 10, 2020',
    dateAccepted: 'April 13, 2020',
    acceptedBy: 'Prashant',
  },
];



export default () => {
  getActiveTap = () => {
    return rewardsUsers;
   };
  const {tableHeaders:{rewardsactivityHeaders}} = Strings;
  return (
    <View style={[CommonStyle.flexp1, CommonStyle.padding15]}>
      <View style={[CommonStyle.row, CommonStyle.paddingL10, CommonStyle.paddingT10]}>
        <Text style={[Styles.userRedeemHeader]}>
          User's Reward Activity List
        </Text>
      </View>
      <View style={[CommonStyle.paddingT5]}>
      <DataTable headers={rewardsactivityHeaders} data={getActiveTap()} />
      </View>
    </View>
  );
};
