import React, {useState, useEffect} from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import Container from '../../components/atoms/Container'
import Text from '../../components/atoms/Text'
import { THEME } from '../../config/themes'
import StickyButton from '../../components/molecules/StickyButton'
import {launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../config/scale';
import { setOffer } from '../../utils/api';
import { AuthContext } from '../../context/AuthContext';

const NewOfferForm = ({route, navigation}) => {
    const {userDetails} = React.useContext(AuthContext);
    const { first } = route.params;
    const [offerDetails, setOfferDetails] = useState({
        offerName: '',
        offerDescription: '',
        file: '',
    });
    const [disabled, setDisabled] = useState(true);
    const [bannerName, setBannerName] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    var postData = new FormData();

    const updateDetails = (id, value) => {
        setOfferDetails((prevState) => ({
            ...prevState,
            [id]: value
        }))
    };

    useEffect(() => {
        let isEmpty = false;
        Object.keys(offerDetails).map(key => {
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

    const onOfferSubmit = () => {
        setIsLoading(true);
        postData = new FormData();
        postData.append('offerName', offerDetails.offerName);
        postData.append('offerDescription', offerDetails.offerDescription);
        postData.append('file', {
            uri: Platform.OS === 'android' ? offerDetails.file.uri : 'file://' + offerDetails.file.uri,
            name: offerDetails.file.fileName,
            type: offerDetails.file.type 
        })
        setOffer(userDetails.phoneNumber, postData)
        .then(() => {
            setIsLoading(false);
            if(first)
                navigation.navigate('Setup', {step:3})
            else
                navigation.navigate('Offers')
        })
        .catch(err => console.log(err))
    }
    
    function selectImage() {
        launchImageLibrary(options, (response) => { // Use launchImageLibrary to open image gallery          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
                postData.append('file', {
                  name: response.assets[0].fileName,
                  type: response.assets[0].type,
                  uri:
                    Platform.OS === 'android' ? response.assets[0].uri : response.assets[0].uri.replace('file://', ''),
                });
                updateDetails('file', response.assets[0]);
                setBannerName(response.assets[0].uri);
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
                        placeholderTextColor="#c1c1c1" 
                        onChangeText={text => updateDetails('offerName', text)}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>Offer description</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="All products 30% off"
                        placeholderTextColor="#c1c1c1" 
                        onChangeText={text => updateDetails('offerDescription', text)}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>Upload Bannner</Text>
                    <TouchableOpacity onPress={selectImage} style={styles.imagePicker}>
                        {bannerName  ? <Text>{bannerName}</Text> : <Ionicons name={'camera'} size={24} color={'#666'} />}
                    </TouchableOpacity>  
                </View>  
            </Container>
            <StickyButton loading={isLoading} bg={disabled ? THEME.color.disabled : THEME.color.primary} color='white' onPress={() => onOfferSubmit()} disabled={disabled}>NEXT</StickyButton>
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
        borderColor: THEME.color.text,
        color: 'black'
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
