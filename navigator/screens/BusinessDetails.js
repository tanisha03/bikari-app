import React, {useState, useEffect} from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Container from '../../components/atoms/Container'
import Text from '../../components/atoms/Text'
import { THEME } from '../../config/themes'
import StickyButton from '../../components/molecules/StickyButton'
import {moderateScale} from '../../config/scale';
import { AuthContext } from '../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from '../../utils/alerts';
import {setMerchantDetails} from '../../utils/api';

const BusinessDetails = ({route, navigation}) => {
    const { details, first } = route.params;
    const [businessDetails, setBusinessDetails] = useState(details || {
        businessName: '',
        businessCategory: '',
        city: '',
        pincode: ''
    });
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const {setuserDetails} = React.useContext(AuthContext);

    const updateDetails = (id, value) => {
        setBusinessDetails((prevState) => ({
            ...prevState,
            [id]: value
        }))
    };

    const handleSubmit = async() => {
        var phoneNumber;
        try {
            phoneNumber = await AsyncStorage.getItem('merchant');
          } 
          catch (err) {
              console.log(err);
        }
        let businessData = {
            ...businessDetails,
            phoneNumber: phoneNumber
        };
        setLoading(true);
        setDisabled(true);
        setMerchantDetails(businessData)
        .then(async(res) => {
            if(res.success){
                Toast('Details Saved');
                setuserDetails(res.responseData.merchant);
                await AsyncStorage.setItem('businessDetails', 'true');
                if(first)
                    navigation.navigate('Setup', {step:2});
                else
                    navigation.navigate('Settings')
            }
        })
        .catch(()=>{
            Toast('Failed, try again');
        });
        setLoading(true);
        setDisabled(true);
    };


    useEffect(() => {
        let isEmpty = false;
        Object.keys(businessDetails).map(key => {
            if(businessDetails[key].length < 3) {
                isEmpty = true;
                setDisabled(true);
                return;
            }
        })
        !isEmpty && setDisabled(false);
    }, [businessDetails]);

    return (
        <>
            <Container>
                <Text style={styles.heading}>Enter business details</Text>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>Business Name</Text>
                    <TextInput
                        style={styles.input}
                        value={businessDetails.businessName}
                        placeholder="Royal Bakery"
                        placeholderTextColor="#c1c1c1" 
                        onChangeText={text => updateDetails('businessName', text)}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>Business category</Text>
                    <TextInput
                        style={styles.input}
                        value={businessDetails.businessCategory}
                        placeholder="Bakery and Condiments"
                        placeholderTextColor="#c1c1c1" 
                        onChangeText={text => updateDetails('businessCategory', text)}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={styles.input}
                        value={businessDetails.city}
                        placeholder="Bangalore"
                        placeholderTextColor="#c1c1c1" 
                        onChangeText={text => updateDetails('city', text)}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>Pincode</Text>
                    <TextInput
                        style={styles.input}
                        value={businessDetails.pincode.toString()}
                        placeholder="452010"
                        keyboardType="numeric" 
                        placeholderTextColor="#c1c1c1" 
                        onChangeText={text => updateDetails('pincode', text)}
                    />
                </View>
            </Container>
            <StickyButton loading={loading} bg={disabled ? THEME.color.disabled : THEME.color.primary} color='white' onPress={handleSubmit} disabled={disabled || loading}>NEXT</StickyButton>
        </>
    )
}

export default BusinessDetails

const styles = StyleSheet.create({
    heading:{
        fontSize: moderateScale(20),
        marginBottom: moderateScale(24)
    },
    label:{
        fontSize: moderateScale(14),
        marginBottom: moderateScale(12)
    },
    input: {
        height: moderateScale(42),
        marginBottom: moderateScale(18),
        borderWidth: 1,
        padding: moderateScale(12),
        borderRadius: 2,
        borderColor: THEME.color.text,
        color: 'black'
    },
})
