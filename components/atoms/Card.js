import React from 'react'
import { StyleSheet, View } from 'react-native'
import {moderateScale} from '../../config/scale';

const Card = (props) => {
    return (
        <View style={{...styles.cardConatiner, backgroundColor: props.bg ? props.bg : 'white', color: props.color ? props.color: '#333', ...props.style}}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardConatiner:{
        borderRadius: 5,
        padding: moderateScale(12),
        minHeight: moderateScale(64)
    }
})
