import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Badge = () => {
    return (
        <View style={{...styles.counter}}>
            <Ionicons name={'checkmark'} size={18} color={'white'} />
         </View>
    )
}

export default Badge

const styles = StyleSheet.create({
    counter: {
        paddingVertical:2,
        paddingHorizontal:4,
        width:25,
        height:25,
        borderRadius: 100,
        marginRight:8,
        backgroundColor: '#5EB581'
    },
})
