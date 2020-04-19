// @ts-nocheck
import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {Styles} from './styles';

export default ({onRequest, loader}) => {
  const {common} = Strings;
  return (
    <View style={CommonStyle.center}>
      <TouchableOpacity
        style={[CommonStyle.center, Styles.requestButton]}
        activeOpacity={1}
        onPress={onRequest}
        disabled={loader}>
        {loader ? (
          <ActivityIndicator style={Styles.loader_r} />
        ) : (
          <Text
            style={[
              CommonStyle.text,
              CommonStyle.paddingV10,
              CommonStyle.paddingH20,
              Styles.requestText,
            ]}>
            {common.request.toUpperCase()}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
