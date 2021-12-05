import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity {...props} style={{...styles.ButtonContainer, backgroundColor: props.bg ? props.bg : 'white', ...props.style}}>
            { props.loading ? <ActivityIndicator style={styles.loader} size="small" color="#0000ff" /> : <Text style={{color:props.color}}>{props.children}</Text> }
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
