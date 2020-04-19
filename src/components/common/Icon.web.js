
import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack, IoMdCloudy } from "react-icons/io";
import { FaUsers, FaUsersCog, FaCoins } from "react-icons/fa"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { colors } from "../../constants"

const components = {
    "arrow-left" : props => <IoIosArrowRoundBack {...props}/>,
    "ios-arrow-round-back" : props => <IoIosArrowRoundBack {...props}/>,
    "arrow-right" : props => <IoIosArrowRoundForward {...props}/>,
    "ios-arrow-round-forward" : props => <IoIosArrowRoundForward {...props}/>,
    "md-cloudy" : props => <IoMdCloudy {...props}/>,
    "user-manage" : props => <FaUsers {...props}/>,
    "roles-manage" : props => <FaUsersCog {...props}/>,
    "rewards-manage" : props => <FaCoins {...props}/>,
    "left-menu" : props => <AiOutlineMenuFold {...props}/>,
    "right-menu" : props => <AiOutlineMenuUnfold {...props}/>,
}
export default props => {
    const { size="16", name="", color=colors.Charcoal, style={}} = props;
    return name&&components[name]({size:`${+size+20}px`,color,name,style});
}
