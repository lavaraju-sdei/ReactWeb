

import React from "react";
import {View, Platform} from "react-native";
import { CommonStyle } from "../../styles";
import { width } from "../../helpers";
import { isWeb } from "../../constants"


const Wrapper = props => {
  let {className = "", style={}} = props;
  const webstyle = width > 800 ? CommonStyle.width50 : width > 600 ? CommonStyle.width70 : CommonStyle.width95;
  if (isWeb) {
    return (<View style={[CommonStyle.center]}>
              <View style={[webstyle,CommonStyle.flex1, CommonStyle.paddingH20, style]}>{props.children}</View>
            </View>);
  } else {
    return <View style={[ style ]}>{props.children}</View>;
  }
};

export default Wrapper;
