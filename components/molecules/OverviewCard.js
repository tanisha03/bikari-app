import React from 'react'
import { StyleSheet } from 'react-native'
import Text from '../atoms/Text'
import Card from '../atoms/Card';
import {moderateScale} from '../../config/scale';

const OverviewCard = (props) => {
    return (
        <Card style={{height: moderateScale(72), width: '45%', marginBottom: moderateScale(12)}}>
            <Text style={{marginBottom: moderateScale(6), color: '#4F60B0', textTransform: 'capitalize'}}>{props.label.toUpperCase()}</Text>
            <Text style={{fontSize: moderateScale(14)}}>{props.value}</Text>
        </Card>
    )
}

export default OverviewCard

const styles = StyleSheet.create({})
