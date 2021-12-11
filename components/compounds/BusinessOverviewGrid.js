import React,{useState, useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../atoms/Text'
import OverviewCard from '../molecules/OverviewCard'
import {moderateScale} from '../../config/scale';
import { getAnalytics } from '../../utils/api'

const BusinessOverviewGrid = ({data}) => {
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
        getAnalytics(data.phoneNumber)
        .then(res => {
            setAnalyticsData([
                {
                    key: 'Customers',
                    value: res.responseData.numCustomers
                },
                {
                    key: 'Offers',
                    value: res.responseData.numOffers
                }
            ])
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <View>
            <Text style={{marginBottom: moderateScale(18), fontSize: moderateScale(16)}}>YOUR BUSINESS</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', flexWrap: 'wrap'}}>
                {
                    analyticsData.length>0 && analyticsData.map(value=>(
                        <OverviewCard key={value.key} label={value.key} value={value.value}/>
                    ))
                }
            </View>
        </View>
    )
}

export default BusinessOverviewGrid

const styles = StyleSheet.create({})
