// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, SafeView, Wrapper} from '../../components';
import {Strings} from '../../constants';
import {Validations} from '../../helpers';
import {CommonStyle} from '../../styles';
import {goBack, onContinue, onRequest} from './bl';
import FormContainer from './FormContainer';
import {Styles} from './styles';

const defaultStates = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  phoneNumberError: null,
};
export default ({componentId}) => {
  const {common, error} = Strings;
  const [state, setState] = useState(defaultStates);
  const {loader_p, loader_r} = useSelector(({profile}) => profile);
  const {FirstName, LastName, PhoneNumber} = useSelector(({user}) => user.user);
  useEffect(() => {
    // getProfile();
    setState({
      firstName: FirstName,
      lastName: LastName,
      phoneNumber: PhoneNumber,
      phoneNumberError: null,
    });
  }, [FirstName]);
  const onChangeText = (key, value) => {
    if (key === 'phoneNumber') {
      if (!Validations[key](value))
        return setState({...state, [key]: value, phoneNumberError: error[key]});
      else return setState({...state, [key]: value, [`${key}Error`]: null});
    }
    setState({...state, [key]: value});
  };
  return (
    <SafeView onBack={() => goBack(componentId)}>
      <View style={[Styles.container, CommonStyle.flex1]}>
        <Wrapper>
          <FormContainer
            state={state}
            onChangeText={onChangeText}
            onRequest={onRequest}
            loader={loader_r}
          />
          <View style={CommonStyle.paddingV5} />
          <Button
            onPress={() => onContinue(state)}
            loader={loader_p}
            name={common.continue.toUpperCase()}
            textStyle={Styles.buttonText}
          />
        </Wrapper>
      </View>
    </SafeView>
  );
};
