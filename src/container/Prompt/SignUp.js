

import React from "react";
import { View, Text } from "react-native";
import { Styles } from "./styles";
import { CommonStyle } from "../../styles";
import { Strings } from "../../constants";
import { changeRoute } from "./bl";
export default props => {
    const { auth } = Strings;
    return (
        <View style={[CommonStyle.center, CommonStyle.paddingV15]}>
        <Text onPress={() => changeRoute(props.componentId, "SignUp")}
          style={[CommonStyle.text, CommonStyle.paddingH20, CommonStyle.paddingV5, Styles.memberText]}>
          {auth.notAmember}
          <Text onPress={() => changeRoute(props.componentId, "SignUp")} style={[CommonStyle.text, Styles.signupText]} >{auth.signUp.toUpperCase()}</Text>
        </Text>
      </View>
    )
}

