
import React from "react";
import { View, Text } from "react-native";
import { Styles } from "./styles";
import {CommonStyle} from "../../styles";
import {Strings} from "../../constants";
import {Validations} from "../../helpers";
import { FormTextInput } from "../../components";
export const FormContainer = props => {
    const { onChangeText, state={} } = props;
    const { placeholder, auth } = Strings
    const fields = [
        { component : props=> <FormTextInput key={props.placeholder} {...props}/>, props:{placeholder:placeholder.firstname, label:placeholder.firstname,onChangeText:firstName => onChangeText("firstName",firstName), name:"firstName", maxLength:100, error : state[`firstNameError`] }},
        { component : props=> <FormTextInput key={props.placeholder} {...props}/>, props:{placeholder:placeholder.lastname, label:placeholder.lastname,onChangeText:lastName => onChangeText("lastName",lastName), name:"lastName", maxLength:100, error : state[`lastNameError`] }},
        { component : props=> <FormTextInput key={props.placeholder} {...props}/>, props:{placeholder:placeholder.phone, label:placeholder.phone,onChangeText:phoneNumber => onChangeText("phoneNumber",phoneNumber), name:"phoneNumber", maxLength:15, error:state[`phoneNumberError`], keyboardType:"phone-pad" }},
   ]

    return (
        <View style={[ CommonStyle.center,Styles.formModal, CommonStyle.shadow ]}>
            <View style={CommonStyle.paddingT10} />
            <View style={CommonStyle.width100}>
                <View style={[CommonStyle.paddingT20, CommonStyle.center]}>
                    <Text style={[CommonStyle.text, CommonStyle.paddingV20, Styles.heading]} >{auth.signUp}</Text>
                </View>
                {fields.map(({component, props})=>component(props))}
                <View style={[CommonStyle.center, CommonStyle.paddingT10]} >
                    <Text style={[CommonStyle.text, CommonStyle.paddingV5, Styles.agreementText]} >{auth.createAcAggrement}</Text>
                    <Text style={[CommonStyle.text, CommonStyle.paddingB20, Styles.agreementText]} >{auth.tNcPP}</Text>
                </View>
                <View style={CommonStyle.paddingV5} />
            </View>
        </View>
    )
}