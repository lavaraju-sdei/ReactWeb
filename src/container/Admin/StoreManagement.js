// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Table } from 'reactstrap';
import { getviewAllStores } from './bl';
import { useSelector } from 'react-redux';
import { Gradient, Loader, DataTable } from '../../components';
import { Strings } from '../../constants';
import { CommonStyle } from '../../styles';
import Styles from './styles';


const viewStores = [
  { storeName: 'Name', Lattitude: '2123.231', Longitide: '12.123123' },
];

export default () => {
  const {
    admin: { viewStore, addStore },
    tableHeaders:{viewStoreHeaders, addStoreHeaders}
  } = Strings;
  const buttons = [{ title: viewStore }, { title: addStore }];
  const [active, onTab] = useState(0);
  const {
    load = true,
    storeData = [],
  } = useSelector(state => state.admin);
  //const storedata = useSelector(state => state.admin);
  //  const addStores =storedata.storeData
  console.log('storedata: ', storeData)
  getActiveTap = () => {
    if (active === 1){
      return viewStores;
    } 
    else {
      let formatedArray = []
       storeData.map((required, i)=>{
        formatedArray.push({
        StoreName:required.StoreName,
        StoreLattitude:required.StoreLattitude,
        StoreLongitude:required.StoreLongitude
        })
       })
       console.log('formatedArray: ',formatedArray)
       return  formatedArray 
    }
  };
  useEffect(() => {
    getviewAllStores();
  }, []);
  return (
    <View style={[CommonStyle.flexp1, CommonStyle.padding15]}>
      <View style={[CommonStyle.row, { justifyContent: 'flex-start' }]}>
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
      {(active === 0) ? (
          <DataTable headers={viewStoreHeaders} data={getActiveTap()} />
        ):(
          <DataTable headers={addStoreHeaders} data={getActiveTap()} />
        )}
    </View>
  );
};
