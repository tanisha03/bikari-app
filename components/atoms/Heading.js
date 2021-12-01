import React from 'react'
import { StyleSheet } from 'react-native'
import Text from './Text'
import {moderateScale} from '../../config/scale';

const Heading = (props) => {
    return (
        <Text style={styles.heading}>{props.children}</Text>
    )
}

export default Heading

const styles = StyleSheet.create({
    heading: {
        fontSize: moderateScale(18),
        marginBottom: 5,
    },
})
