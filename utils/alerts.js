import { ToastAndroid, Platform, AlertIOS } from 'react-native'

export const Toast = (message) => {
    (Platform.OS === 'android') ? ToastAndroid.show(message, ToastAndroid.SHORT)
                  : AlertIOS.alert(message);
};