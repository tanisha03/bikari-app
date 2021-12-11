import React,{useState, useEffect} from 'react'
import { StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, ToastAndroid, Platform, AlertIOS } from 'react-native'
import AuthContainer from '../../components/atoms/AuthContainer'
import Text from '../../components/atoms/Text'
import {THEME} from '../../config/themes'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UserLogin, VerifyOTP } from '../../utils/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/AuthContext'
import { Toast } from '../../utils/alerts'

const OTP = ({navigation}) => {
    const [isOTPView, setisOTPView] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [disabledState, setDisabledState] = useState(true);
    const [OTP, setOTP] = useState('');

    const {setIsSignedIn, setuserDetails} = React.useContext(AuthContext);

    useEffect(() => {
        const getData = async() => {
            try {
                const merchant = await AsyncStorage.getItem('merchant');
                const isDataFilled = await AsyncStorage.getItem('businessDetails');
                (merchant && !isDataFilled) && navigation.navigate('Setup', {step: 1});
              } 
              catch (err) {
                  console.log(err);
              }
        };
        getData();
      }, []);

    useEffect(() => {
        if(mobileNumber.length === 10) setDisabledState(false);
        else setDisabledState(true);
    }, [mobileNumber]);

    const handleSendOTP = () => {
        setDisabledState(true);
        setIsLoading(true);
        UserLogin({
            phoneNumber: mobileNumber
        })
        .then(res => {
            if(res.success){
                Toast('OTP send successfully');
                setisOTPView(true);
            }
        })
        .catch(()=>{
            Toast('Failed, try again');
        });
        setDisabledState(false);
        setIsLoading(false);
    };

    const validateOTP = () => {
        setDisabledState(true);
        setIsLoading(true);
        var requestBody = {
            number: mobileNumber,
            otp: OTP
        };
        VerifyOTP(requestBody)
        .then(res => {
            if(res && res.success){
                Toast('Verified');
                (Platform.OS === 'android') ? ToastAndroid.show('Verified', ToastAndroid.SHORT)
                  : AlertIOS.alert('Verified');
                handleAuthRouting(res.responseData);
            }
            else{
                Toast('Wrong OTP!');
                setisOTPView(false);
            }
        })
        .catch((err)=>{
            Toast('Failed, try again!');
            setisOTPView(false);
        });
        setDisabledState(false);
        setIsLoading(false);
    };

    const handleAuthRouting = async(authData) => {
        try {
            await AsyncStorage.setItem('merchant', authData.merchant.phoneNumber)
            await AsyncStorage.setItem('businessDetails', authData.data_filled.toString())
          } 
        catch (err) {
            console.log(err);
        }
        setuserDetails(authData.merchant);
        (authData.data_filled) ? setIsSignedIn(true) : navigation.navigate('Setup', {step: 1});
    };

    return (
        <AuthContainer>
            {
                !isOTPView ? (
                    <>
                        <Text style={styles.label}>Enter Mobile Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="9768657865"
                            keyboardType="numeric"
                            onChangeText={setMobileNumber}
                            value={mobileNumber}
                        />
                        <TouchableOpacity style={{...styles.btn, backgroundColor: disabledState ? THEME.color.disabled : THEME.color.primary}} onPress={handleSendOTP} disabled={disabledState}>
                            { isLoading ? <ActivityIndicator style={styles.loader} size="small" color="#0000ff" /> : <Text style={{textAlign: 'center', color: 'white'}}>Send OTP</Text>}
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity onPress={() => setisOTPView(false)}>
                        <Ionicons name='ios-arrow-back' size={24} color={THEME.color.text} style={{marginBottom:10}}/>
                        </TouchableOpacity>
                        <Text style={styles.label}>Enter OTP</Text>
                        <OTPInputView
                            style={{width: '100%', height:80}}
                            pinCount={6}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled = {(code => {
                                setDisabledState(false);
                                setOTP(code);
                            })}
                        />
                        <TouchableOpacity style={{...styles.btn, backgroundColor: disabledState ? THEME.color.disabled : THEME.color.primary}} onPress={validateOTP} disabled={disabledState}>
                            { isLoading ? <ActivityIndicator style={styles.loader} size="small" color="#0000ff" /> : <Text style={{textAlign: 'center', color: 'white'}}>Continue</Text> }
                        </TouchableOpacity>
                    </>
                )
            }
        </AuthContainer>
    )
}

export default OTP

const styles = StyleSheet.create({
    label:{
        fontSize: 18,
        marginBottom:8
    },
    input: {
        height: 40,
        marginBottom: 24,
        borderWidth: 1,
        padding: 10,
        borderRadius: 2,
        borderColor: THEME.color.text,
        color: 'black'
    },
    btn: {
        padding: 12,
        borderRadius: 6,
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: THEME.color.text
      },
      underlineStyleHighLighted: {
        borderColor: THEME.color.primary,
      },    
});
