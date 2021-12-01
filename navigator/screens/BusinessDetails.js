import React, {useState, useEffect} from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Container from '../../components/atoms/Container'
import Text from '../../components/atoms/Text'
import { THEME } from '../../config/themes'
import StickyButton from '../../components/molecules/StickyButton'
import {moderateScale} from '../../config/scale';
import { is } from '@babel/types'


const BusinessDetails = ({navigation}) => {
    const [businessDetails, setBusinessDetails] = useState({
        name: '',
        category: '',
        city: '',
        pincode: ''
    });
    const [disabled, setDisabled] = useState(true);


    const updateDetails = (id, value) => {
        setBusinessDetails((prevState) => ({
            ...prevState,
            [id]: value
        }))
    };

    useEffect(() => {
        let isEmpty = false;
        Object.keys(businessDetails).map(key => {
            console.log(businessDetails);
            if(businessDetails[key] === '') {
                isEmpty = true;
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
                    <Text style={styles.label}>Business name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Royal Bakery"
                        onChangeText={text => updateDetails('name', text)}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>Business category</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Bakery and Condiments"
                        onChangeText={text => updateDetails('category', text)}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Bangalore"
                        onChangeText={text => updateDetails('city', text)}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>Pincode</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="452010"
                        keyboardType="numeric"
                        onChangeText={text => updateDetails('pincode', text)}
                    />
                </View>
            </Container>
            <StickyButton bg={disabled ? THEME.color.disabled : THEME.color.primary} color='white' onPress={() => navigation.navigate('Setup', {step:2})} disabled={disabled}>NEXT</StickyButton>
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
        borderColor: THEME.color.text
    },
})
