import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../atoms/Text'
import OverviewCard from '../molecules/OverviewCard'
import {moderateScale} from '../../config/scale';

const BusinessOverviewGrid = () => {
    let values=[
        {
            key:'Customers',
            value: 42
        },
        {
            key:'Offers',
            value: 8
        },
    ]
    return (
        <View>
            <Text style={{marginBottom: moderateScale(18), fontSize: moderateScale(16)}}>YOUR BUSINESS</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', flexWrap: 'wrap'}}>
                {
                    values.map(value=>(
                        <OverviewCard key={value.key} label={value.key} value={value.value}/>
                    ))
                }
            </View>
        </View>
    )
}

export default BusinessOverviewGrid

const styles = StyleSheet.create({})
