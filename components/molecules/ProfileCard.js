import React from 'react'
import { StyleSheet, View } from 'react-native';
import Text from '../atoms/Text';
import Card from '../atoms/Card';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {moderateScale} from '../../config/scale';

const ProfileCard = ({navigation}) => {
    return (
        <Card bg='#E7EBFC' color='4F60B0' style={{marginBottom: moderateScale(24)}} onPress={() => navigation.navigate('Profile')}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.container}>
                    <View style={{width: moderateScale(200), height: moderateScale(42)}}>
                        <Text color="#4F60B0" style={{fontSize: 14}}>View your business profile on Bikari</Text>
                    </View>
                    <View style={{width: moderateScale(60), height: moderateScale(42)}}>
                        <Icon
                            name='chevron-right'
                            color='#4F60B0' 
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </Card>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center'
    }
})
