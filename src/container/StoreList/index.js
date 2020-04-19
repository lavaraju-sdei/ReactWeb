// @ts-nocheck
import React, {useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {goToAuth} from '../../actions';
import {SafeView} from '../../components';
import {CommonStyle} from '../../styles';
import {useSelector} from 'react-redux';
import {Gradient} from '../../components';
import {checkIn} from './bl';
import {Styles} from './styles';
export default props => {
  useEffect(() => {}, []);
  const {store} = useSelector(({user}) => user);
  return (
    <SafeView
      header
      title={''}
      onBack={() => goToAuth()}
      containerStyle={[CommonStyle.flex1]}>
      <View style={[CommonStyle.flex1]}>
        <View style={[CommonStyle.flexp1, CommonStyle.padding20]}>
          <Text style={[Styles.headerTitle]}>
            Select any one store from the list
          </Text>
        </View>
        <View style={[CommonStyle.flexp9, CommonStyle.padding20]}>
          <FlatList
            data={store && store.storeList}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[CommonStyle.flex1]}
            renderItem={({item}) => (
              <Gradient
                style={[
                  CommonStyle.marginT10,
                  CommonStyle.padding15,
                  Styles.storeView,
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    checkIn(phoneNumber, item.StoreId);
                  }}>
                  <Text style={[Styles.storeName]}>{item.StoreName}</Text>
                </TouchableOpacity>
              </Gradient>
            )}
            ListEmptyComponent={
              <View
                style={[
                  CommonStyle.flex1,
                  CommonStyle.padding20,
                  CommonStyle.center,
                ]}>
                <Text style={[Styles.emptyList]}>
                  Sorry!! No stores are available near you
                </Text>
              </View>
            }
          />
        </View>
      </View>
    </SafeView>
  );
};
