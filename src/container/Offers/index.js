// @ts-nocheck
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, Loader, SafeView, Wrapper} from '../../components';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {getOffers, goBack, onPoints} from './bl';
import HeaderBox from './HeaderBox';
import List from './List';
import {Styles} from './styles';

export default props => {
  const {common} = Strings;
  const {componentId} = props;
  const {loader_o = false, offers = []} = useSelector(
    ({dashboard}) => dashboard,
  );
  useEffect(() => {
    getOffers();
  }, []);
  return (
    <SafeView>
      {loader_o ? (
        <Loader style={[CommonStyle.flex1, CommonStyle.center]} />
      ) : (
        <View style={[Styles.container, CommonStyle.flex1]}>
          <Wrapper>
            <HeaderBox />
            <List offers={offers} onPoints={onPoints} />
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
