import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native' 
import { THEME } from '../../config/themes'

const FAB = (props) => {
    return (
        <TouchableOpacity
            {...props} style={{...styles.ButtonContainer, backgroundColor: props.bg ? props.bg : THEME.color.primary, ...props.style}}
        >
            {props.children}
        </TouchableOpacity>
    )
}

export default FAB

const styles = StyleSheet.create({
    ButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 42,
        position: 'absolute',
        bottom: 18,
        right: 24,
        height: 42,
        backgroundColor: '#fff',
        borderRadius: 100,
        zIndex: 9999
    }
})
