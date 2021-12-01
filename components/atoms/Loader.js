import React from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'

const Loader = () => {
    return (
        <ActivityIndicator style={styles.loader} size="small" color="#0000ff" />
    )
}

export default Loader

const styles = StyleSheet.create({
    loader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // marginVertical: 40
      }
})
