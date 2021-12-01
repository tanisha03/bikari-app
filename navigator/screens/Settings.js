import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { THEME } from '../../config/themes'
import {moderateScale} from '../../config/scale';

const Settings = () => {
    return (
        <View>
            <View style={styles.businessProfile}>
                <Image style={styles.shopImage} source={{uri: "https://property.myludhiana.com/wp-content/uploads/2016/05/property_placeholder.jpg"}}/>
                <View>
                    <Text>Royal Bakery</Text>
                    <Text style={styles.linkText}>Edit business profile</Text>
                </View>
            </View>
            <View style={styles.settingsListItem}>
                <Text tyle={styles.listItemText}>Setting</Text>
            </View>
            <View style={styles.settingsListItem}>
                <Text tyle={styles.listItemText}>Logout</Text>
            </View>
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
        color: THEME.color.text
    }
})
