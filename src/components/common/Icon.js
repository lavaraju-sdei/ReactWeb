import React from "react";
import { colors } from "../../constants"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"

const components = {
    Feather : props => <Feather {...props} />,
    Ionicons : props => <Ionicons {...props} />,

}
export default props => {
    const {type, size=16, name="", color=colors.Charcoal, style={}} = props;
    return type&&components[type]({size,color,style, name});
}

