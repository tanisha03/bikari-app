import React, {useState, useEffect} from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import Container from '../../components/atoms/Container'
import Text from '../../components/atoms/Text'
import { THEME } from '../../config/themes'
import StickyButton from '../../components/molecules/StickyButton'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../config/scale';

const NewOfferForm = ({navigation}) => {

    const [offerDetails, setOfferDetails] = useState({
        name: '',
        description: '',
        banner: '',
    });
    const [disabled, setDisabled] = useState(true);


    const updateDetails = (id, value) => {
        setOfferDetails((prevState) => ({
            ...prevState,
            [id]: value
        }))
    };

    useEffect(() => {
        let isEmpty = false;
        Object.keys(offerDetails).map(key => {
            console.log(offerDetails);
            if(offerDetails[key] === '') {
                isEmpty = true;
                return;
            }
        })
        !isEmpty && setDisabled(false);
    }, [offerDetails]);

    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    
    function selectImage() {
        launchImageLibrary(options, (response) => { // Use launchImageLibrary to open image gallery
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.assets[0].uri, name: response.assets[0].fileName };
              updateDetails('banner', source);
            }
          });
      }

    return (
        <>
            <Container>
                <Text style={styles.heading}>Enter offer details</Text>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>Offer name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Super Diwali 2021 offer"
                        onChangeText={text => updateDetails('name', text)}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>Offer description</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="All products 30% off"
                        onChangeText={text => updateDetails('description', text)}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>Upload Bannner</Text>
                    <TouchableOpacity onPress={selectImage} style={styles.imagePicker}>
                        {offerDetails?.banner?.name ? <Text>{offerDetails.banner.name}</Text> : <Ionicons name={'camera'} size={24} color={'#666'} />}
                    </TouchableOpacity>  
                </View>  
            </Container>
            <StickyButton bg={disabled ? THEME.color.disabled : THEME.color.primary} color='white' onPress={() => navigation.navigate('Setup', {step:3})} disabled={disabled}>NEXT</StickyButton>
        </>
    )
}

export default NewOfferForm

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
    imagePicker: {
        width: '100%',
        padding: moderateScale(36),
        marginBottom: moderateScale(18),
        backgroundColor: '#e3e3e3',
        borderRadius: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
