// @ts-nocheck
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, OTPInput, SafeView, Wrapper} from '../../components';
import {Strings} from '../../constants';
import {CommonStyle} from '../../styles';
import {goAuth, resendOtp, verifyOtp} from './bl';
import Styles from './styles';

export default props => {
  const [code, setState] = useState('');
  const {phoneNumber = ''} = useSelector(({user}) => user.user);
  const loader = useSelector(state => state.auth).loader;
  const {otp, common} = Strings;
  return (
    <SafeView header containerStyle={CommonStyle.flex1}>
      <View
        style={[Styles.container, CommonStyle.flex1, CommonStyle.container]}>
        <Wrapper>
          <View style={[CommonStyle.padding10]} />
          <View style={[CommonStyle.center]}>
            <Text
              style={[
                CommonStyle.text,
                Styles.acVerific,
                CommonStyle.paddingV20,
              ]}>
              {otp.acVerific}
            </Text>
            <Text
              style={[
                CommonStyle.text,
                Styles.messageText,
                CommonStyle.paddingV5,
              ]}>
              {otp.enterMessage}
            </Text>
            <Text
              style={[
                CommonStyle.text,
                Styles.messageText,
                CommonStyle.paddingB20,
              ]}>
              {`${otp.sendMessage} ${phoneNumber}. `}
              <Text
                onPress={() => resendOtp(phoneNumber)}
                style={[
                  CommonStyle.text,
                  CommonStyle.paddingH10,
                  Styles.resend,
                ]}>
                {otp.resend}
              </Text>
            </Text>
          </View>
          <View style={[CommonStyle.padding10]} />
          <OTPInput pinCount={4} onChange={otp => setState(otp)} />
          <View style={[CommonStyle.paddingV20]} />
          <Button
            onPress={() => code.length === 4 && verifyOtp(phoneNumber, code)}
            loader={loader}
            name={otp.verfy}
            textStyle={Styles.buttonText}
          />
          <Button
            onPress={() => goAuth()}
            name={common.goBack}
            textStyle={Styles.buttonText}
          />
        </Wrapper>
      </View>
    </SafeView>
  );
};
