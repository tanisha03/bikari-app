import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

const Container = (props) => {
    return (
        <ScrollView style={{...styles.container, ...props.style}}>
            {props.children}
        </ScrollView>
    )
}

export default Container

const styles = StyleSheet.create({
    container:{
        padding:20,
    }
});
