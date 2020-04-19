// @ts-nocheck
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, Loader, PointsList, SafeView, Wrapper} from '../../components';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {formatdata, getHistoryPoints, goBack} from './bl';
import HeaderBox from './HeaderBox';
import {Styles} from './styles';

export default props => {
  const {common} = Strings;
  const {componentId} = props;
  const {
    loader_h = false,
    loader_m = false,
    load = true,
    history = [],
  } = useSelector(({dashboard}) => dashboard);
  const points = formatdata(history);
  useEffect(() => {
    getHistoryPoints();
  }, []);
  return (
    <SafeView>
      {loader_h ? (
        <Loader style={[CommonStyle.flex1, CommonStyle.center]} />
      ) : (
        <View style={[Styles.container, CommonStyle.flex1]}>
          <Wrapper>
            <HeaderBox />
            <PointsList
              data={points}
              onloadmore={getHistoryPoints}
              loader_m={loader_m}
              load={load}
              datetime
            />
            <Button
              onPress={() => goBack(componentId)}
              name={common.goBack}
              textStyle={Styles.buttonText}
            />
          </Wrapper>
        </View>
      )}
    </SafeView>
  );
};
