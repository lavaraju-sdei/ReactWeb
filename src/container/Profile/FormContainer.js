// @ts-nocheck
import React from 'react';
import {Text, View} from 'react-native';
import {FormTextInput} from '../../components';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import RequestButton from './RequestButton';
import {Styles} from './styles';
export default props => {
  const {onChangeText, state = {}, onRequest, loader = false} = props;
  const {placeholder, profile, common} = Strings;
  const {firstName, lastName, phoneNumber} = state;
  const fields = [
    {
      component: props => <FormTextInput key={props.placeholder} {...props} />,
      props: {
        placeholder: placeholder.firstname,
        value: firstName,
        label: placeholder.firstname,
        onChangeText: firstName => onChangeText('firstName', firstName),
        name: 'firstName',
        maxLength: 100,
        error: state[`firstNameError`],
      },
    },
    {
      component: props => <FormTextInput key={props.placeholder} {...props} />,
      props: {
        placeholder: placeholder.lastname,
        value: lastName,
        label: placeholder.lastname,
        onChangeText: lastName => onChangeText('lastName', lastName),
        name: 'lastName',
        maxLength: 100,
        error: state[`lastNameError`],
      },
    },
    {
      component: props => <FormTextInput key={props.placeholder} {...props} />,
      props: {
        placeholder: placeholder.phone,
        value: phoneNumber,
        label: placeholder.phone,
        onChangeText: phoneNumber => onChangeText('phoneNumber', phoneNumber),
        name: 'phoneNumber',
        maxLength: 15,
        error: state[`phoneNumberError`],
        keyboardType: 'phone-pad',
      },
    },
  ];

  return (
    <View style={[CommonStyle.center, Styles.formModal, CommonStyle.shadow]}>
      <View style={CommonStyle.paddingT5} />
      <View style={CommonStyle.width100}>
        <View style={[CommonStyle.paddingT15, CommonStyle.center]}>
          <Text
            style={[CommonStyle.text, CommonStyle.paddingV10, Styles.heading]}>
            {profile.profile}
          </Text>
        </View>
        {fields.map(({component, props}) => component(props))}
        <View style={[CommonStyle.center, CommonStyle.paddingT5]}>
          <Text
            style={[
              CommonStyle.text,
              CommonStyle.paddingV5,
              Styles.messageText,
            ]}>
            {profile.profileMsg1}
          </Text>
          <Text
            style={[
              CommonStyle.text,
              CommonStyle.paddingB5,
              Styles.messageText,
            ]}>
            {profile.profileMsg2}
          </Text>
        </View>
        <View style={CommonStyle.paddingV5} />
        <RequestButton onRequest={() => onRequest(state)} loader={loader} />
        <View style={CommonStyle.paddingV10} />
      </View>
    </View>
  );
};
