// @ts-nocheck
import React, {useState} from 'react';
import {Dimensions, Keyboard, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {goToAuth} from '../../actions';
import {Button, FormTextInput, SafeView, Wrapper} from '../../components';
import {Strings} from '../../constants';
import {Validations} from '../../helpers';
import {CommonStyle} from '../../styles';
import {submitCheckout} from './bl';
import {Styles} from './styles';
const {height} = Dimensions.get('window');

export default props => {
  const [state, setState] = useState({phoneNumber: '', phoneNumberError: null});
  const {placeholder, auth, error} = Strings;
  const loader = useSelector(state => state.auth).loader;
  return (
    <SafeView
      header
      title={auth.signIn}
      onBack={() => goToAuth()}
      containerStyle={CommonStyle.flex1}>
      <View
        style={[
          Styles.container,
          Styles.loginSpace,
          CommonStyle.flex1,
          {height},
          CommonStyle.container,
        ]}
        onStartShouldSetResponder={Keyboard.dismiss}>
        <Wrapper>
          <View style={[CommonStyle.center, CommonStyle.paddingV5]}>
            <Text
              style={[
                CommonStyle.text,
                CommonStyle.paddingV5,
                Styles.checkoutText,
              ]}>
              {auth.checkout}
            </Text>
            <Text style={[CommonStyle.text, Styles.checkoutConfirmText]}>
              {auth.checkoutConfirmation}
            </Text>
          </View>
          <View style={CommonStyle.padding10} />
          <FormTextInput
            label={placeholder.phone}
            placeholder={placeholder.phone}
            onChangeText={phoneNumber =>
              setState({
                phoneNumber,
                phoneNumberError: !Validations.phoneNumber(phoneNumber)
                  ? error.phoneNumber
                  : null,
              })
            }
            value={state.phoneNumber}
            returnKey="done"
            onSubmitEditing={() => submitCheckout(state, props.componentId)}
            autoCapitalize={'none'}
            keyboardType={'phone-pad'}
            maxLength={15}
            error={state.phoneNumberError}
          />
          <View style={CommonStyle.paddingH20}>
            <Text style={[CommonStyle.text, Styles.checkoutInfoText]}>
              {auth.checkoutPhoneInfo1}
            </Text>
          </View>
          <View style={CommonStyle.padding10} />
          <Button
            loader={loader}
            onPress={() => submitCheckout(state, props.componentId)}
            name={auth.checkout}
            textStyle={Styles.buttonText}
          />
        </Wrapper>
      </View>
    </SafeView>
  );
};
