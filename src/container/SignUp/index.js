// @ts-nocheck
import React, {useState} from 'react';
import {Keyboard, View} from 'react-native';
import {useSelector} from 'react-redux';
import {goToAuth} from '../../actions';
import {Button, SafeView, Scroll, Wrapper} from '../../components';
import {Strings} from '../../constants';
import {Validations} from '../../helpers';
import {CommonStyle} from '../../styles';
import {submitSignUp} from './bl';
import {FormContainer} from './FormContainer';
import {Styles} from './styles';

const defaultStates = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  phoneNumberError: null,
};

export default props => {
  const [state, setState] = useState(defaultStates);
  const loader = useSelector(state => state.auth).loader;
  const onChangeText = (key, value) => {
    const {error} = Strings;
    if (key === 'phoneNumber') {
      if (!Validations[key](value))
        return setState({...state, [key]: value, [`${key}Error`]: error[key]});
      else return setState({...state, [key]: value, [`${key}Error`]: null});
    }
    setState({...state, [key]: value});
  };
  const {common, auth} = Strings;
  return (
    <SafeView header title={auth.signUp} onBack={() => goToAuth()}>
      <View
        style={[Styles.container, CommonStyle.flex1, CommonStyle.container]}
        onStartShouldSetResponder={Keyboard.dismiss}>
        <Wrapper>
          <Scroll style={[CommonStyle.paddingH10]}>
            <FormContainer
              onChangeText={(k, v) => onChangeText(k, v)}
              state={state}
            />
            <View style={CommonStyle.paddingV10} />
            <Button
              loader={loader}
              onPress={() => submitSignUp(state, props.componentId)}
              name={common.savenCont}
              gradient
              textStyle={Styles.buttonText}
            />
          </Scroll>
        </Wrapper>
      </View>
    </SafeView>
  );
};
