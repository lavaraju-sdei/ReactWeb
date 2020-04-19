import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Image} from 'react-native';
import {Provider} from 'react-redux';
//Screens
import {
  SignIn,
  SignUp,
  Dashboard,
  OTP,
  Prompt,
  RedeemPoints,
  PromotionalEvents,
  Offers,
  PointsHistory,
  Profile,
  Checkout,
  StoreList,
} from '../container';
import {Loading, Header} from '../components';

/* eslint-enable */

export const registerScreens = store => {
  Navigation.registerComponentWithRedux(
    'Store',
    () => StoreList,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'prompt',
    () => Prompt,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'Dashboard',
    () => Dashboard,
    Provider,
    store,
  );

  Navigation.registerComponentWithRedux(
    'SignIn',
    () => SignIn,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'SignUp',
    () => SignUp,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux('OTP', () => OTP, Provider, store);
  Navigation.registerComponentWithRedux(
    'RedeemPoints',
    () => RedeemPoints,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'PromotionalEvents',
    () => PromotionalEvents,
    Provider,
    store,
  );

  Navigation.registerComponentWithRedux(
    'Offers',
    () => Offers,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'PointsHistory',
    () => PointsHistory,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'Profile',
    () => Profile,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'Checkout',
    () => Checkout,
    Provider,
    store,
  );
};
