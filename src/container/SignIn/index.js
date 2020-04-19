// @ts-nocheck
import React, {useState, useEffect} from 'react';
import {View, Dimensions, Keyboard, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {submitLogin, hasLocationPermission, getPosition} from './bl';
import {Styles} from './styles';
import {CommonStyle} from '../../styles';
import {Strings} from '../../constants';
import {Validations, pushnotifications} from '../../helpers';
import {SafeView} from '../../components';
import {pushToParticularScreen, pop, goToAuth} from '../../actions';
import {Wrapper, FormTextInput, Button} from '../../components';
const {height} = Dimensions.get('window');

export default props => {
  const [state, setState] = useState({
    phoneNumber: '',
    phoneNumberError: null,
  });
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    const getpoints = async () => {
      if (hasLocationPermission()) {
        getPosition().then(position => {
          let {coords} = position;
          setLatitude(coords.latitude);
          setLongitude(coords.longitude);
        });
      }
    };
    getpoints();
  }, []);
  const {placeholder, auth, error} = Strings;
  const loader = useSelector(state => state.user).storeLoader;
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
                Styles.checkinText,
              ]}>
              {auth.checkin}
            </Text>
            <Text
              style={[
                CommonStyle.text,
                CommonStyle.paddingH20,
                Styles.checkoutConfirmText,
              ]}>
              {auth.checkinConfirmation}
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
            onSubmitEditing={() =>
              submitLogin(state, latitude, longitude, props.componentId)
            }
            autoCapitalize={'none'}
            keyboardType={'phone-pad'}
            maxLength={15}
            error={state.phoneNumberError}
          />
          <Button
            loader={loader}
            onPress={() =>
              submitLogin(state, latitude, longitude, props.componentId)
            }
            name={auth.checkin}
            textStyle={Styles.buttonText}
          />
        </Wrapper>
      </View>
    </SafeView>
  );
};
