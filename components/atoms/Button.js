import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity {...props} style={{...styles.ButtonContainer, backgroundColor: props.bg ? props.bg : 'white', ...props.style}}>
            <Text style={{color:props.color}}>{props.children}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    ButtonContainer:{
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
})
