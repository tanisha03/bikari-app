import React,{useState, useEffect} from 'react'
import { StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import AuthContainer from '../../components/atoms/AuthContainer'
import Text from '../../components/atoms/Text'
import {THEME} from '../../config/themes'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from '../../components/atoms/Loader'

const OTP = ({navigation}) => {
    const [isOTPView, setisOTPView] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [disabledState, setDisabledState] = useState(true);

    useEffect(() => {
        (mobileNumber.length === 10) && setDisabledState(false);
    }, [mobileNumber]);

    const handleSendOTP = () => {
        setisOTPView(true);
        setDisabledState(true);
    };

    const validateOTP = () => {
        navigation.navigate('Setup', {step: 1});
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
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled = {(code => {
                                setDisabledState(false);
                                console.log(`Code is ${code}, you are good to go!`)
                            })}
                        />
                        <TouchableOpacity style={{...styles.btn, backgroundColor: disabledState ? THEME.color.disabled : THEME.color.primary}} onPress={validateOTP} disabled={disabledState}>
                            <Text style={{textAlign: 'center', color: 'white'}}>Continue</Text>
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
        borderColor: THEME.color.text
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
