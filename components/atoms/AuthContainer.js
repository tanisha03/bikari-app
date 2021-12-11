import React from 'react'
import { StyleSheet,View, Image } from 'react-native'
import Text from './Text'
import {THEME} from '../../config/themes';

const AuthContainer = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <View style={styles.header}>
                <Image source={require('../../assets/images/logo.png')} style={{height: 56, width:65}}/>
                <Text style={styles.heading}>BIKARI</Text>
            </View>
            <View style={styles.overlay}>
                {props.children}
            </View>
        </View>
    )
}

export default AuthContainer

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width: '100%',
        backgroundColor: THEME.color.primary,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'white',
        fontSize: 22,
        marginLeft: 8
    },
    overlay: {
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 12,
        paddingTop: 24,
        paddingBottom: 12
    },
});
