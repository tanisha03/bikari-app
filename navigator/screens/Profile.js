import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AuthContext } from '../../context/AuthContext';
import {moderateScale} from '../../config/scale';
import Heading from '../../components/atoms/Heading';

export default function Profile() {
    const {userDetails} = React.useContext(AuthContext);
    return (
        <View>
            <View style={styles.businessProfile}>
                <Image style={styles.shopImage} source={{uri: "https://property.myludhiana.com/wp-content/uploads/2016/05/property_placeholder.jpg"}}/>
                <View>
                    <Heading>{userDetails.businessName}</Heading>
                    <Text>{userDetails.businessCategory}</Text>
                </View>
            </View>
            <View style={styles.otherDetails}>
                <Text>{userDetails.city} - {userDetails.pincode}</Text>
            </View>
            <Heading style={{textAlign: 'center'}}>Business Overview</Heading>
            <View style={styles.insightsListItems}>
                    <Text>Customers</Text>
                    <Text>45</Text>
            </View>
            <View style={styles.insightsListItems}>
                    <Text>Offers</Text>
                    <Text>6</Text>
            </View>
            <View style={styles.insightsListItems}>
                    <Text>Reach</Text>
                    <Text>150</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    businessProfile: {
        backgroundColor: 'white',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(20),
        flex: 1,
        flexDirection: 'row',
        minHeight: moderateScale(96),
        // marginBottom: 24
    },
    otherDetails: {
        backgroundColor: 'white',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(8),
        marginBottom: 24
    },
    shopImage: {
        width: moderateScale(60),
        height: moderateScale(60),
        marginRight: moderateScale(16)
    },
    insightsListItems: {
        backgroundColor: 'white',
        padding: moderateScale(12),
        borderWidth: 1, 
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: '#CFCFCF',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: moderateScale(48),
    },
})
