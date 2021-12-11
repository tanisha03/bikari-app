import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Linking, Share } from 'react-native'
import { THEME } from '../../config/themes'
import {moderateScale} from '../../config/scale';
import { AuthContext } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SHARE_BIKARI} from '../../config/constant';
import Text from '../../components/atoms/Text';

const Settings = ({navigation}) => {
    const {userDetails, setIsSignedIn} = React.useContext(AuthContext);
    const [businessDetails, setBusinessDetails] = useState({});

    useEffect(() => {
        setBusinessDetails({
            businessName: userDetails.businessName,
            businessCategory: userDetails.businessCategory,
            city: userDetails.city,
            pincode: userDetails.pincode
        })
    }, []);

    const handleSignOut = async() => {
        try {
            await AsyncStorage.removeItem('merchant');
            setIsSignedIn(false);
          } 
          catch (err) {
              console.log(err);
          }
    };

    const handleShare = () => {
        Share.share({
            title: 'Share Bikari',
            message: SHARE_BIKARI(userDetails.merchantCode , userDetails.businessName)
          });
    };

    return (
        <View>
            <View style={styles.businessProfile}>
                <Image style={styles.shopImage} source={{uri: "https://property.myludhiana.com/wp-content/uploads/2016/05/property_placeholder.jpg"}}/>
                <View>
                    <Text>{userDetails.businessName}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Edit', {details: businessDetails})}>
                        <Text style={styles.linkText}>Edit business profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.settingsListItem} onPress={handleShare}>
                <Ionicons name={'share-outline'} size={18} color={THEME.color.disabled} />
                <Text style={styles.listItemText}>Share Bikari App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsListItem} onPress={() => Linking.openURL('https://www.bikari.in/').catch(err => console.error("Couldn't load page", err))}>
                <Ionicons name={'star-outline'} size={18} color={THEME.color.disabled} />
                <Text style={styles.listItemText}>Rate us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsListItem} onPress={handleSignOut}>
                <Ionicons name={'exit-outline'} size={18} color={THEME.color.disabled} />
                <Text style={styles.listItemText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    businessProfile: {
        backgroundColor: 'white',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(20),
        flex: 1,
        flexDirection: 'row',
        minHeight: moderateScale(96),
        marginBottom: 24
    },
    shopImage: {
        width: moderateScale(60),
        height: moderateScale(60),
        marginRight: moderateScale(16)
    },
    linkText: {
        color: THEME.color.primary,
        fontSize: moderateScale(14)
    },
    settingsListItem: {
        flex: 1,
        flexDirection: 'row',
        minHeight: moderateScale(48),
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: moderateScale(12),
        paddingLeft: moderateScale(8),
        borderWidth: 1, 
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: '#CFCFCF'
    },
    listItemText: {
        color: THEME.color.text,
        fontSize: moderateScale(16),
        marginLeft: moderateScale(16)
    }
})
