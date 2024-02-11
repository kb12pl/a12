import { Alert } from "react-native"

const xlog=console.log
export default xlog;

export const ok=(mess:object)=>{
    Alert.alert('',String(mess));
}
