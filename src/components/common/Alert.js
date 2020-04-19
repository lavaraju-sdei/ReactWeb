import { Alert } from "react-native";
import { confirmAlert } from 'react-confirm-alert';
import { isWeb, Strings } from "../../constants"
export default props => {
  const { common } =Strings;
  const {title, message, label1=common.cancel, onPress1=()=>{}, label2=common.continue, onPress2=()=>{}  } = props

  return isWeb?
    confirmAlert({
      title, message,
      buttons: [
        { label: label1, onClick: onPress1 },
        { label: label2, onClick: onPress2 }
      ]
    })
  :
    Alert.alert(  
      title,  message,
      [  
          {   text: label1, onPress: () => console.log('Cancel Pressed'),  
              style: 'cancel',  
          },  
          {text:label2, onPress: onPress2},  
      ],  
      {cancelable: true}  
  )
  
}