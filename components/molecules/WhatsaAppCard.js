import React from 'react'
import { StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import Card from '../atoms/Card';
import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import {moderateScale} from '../../config/scale';

const WhatsAppCard = () => {
    return (
        <Card bg='white' style={{marginBottom: moderateScale(28)}}>
            <Heading>Share offers on WhatsApp</Heading>
            <Text>Share with your customers to stay upto date with your offer list</Text>
            <Button bg='#4BCA5A' color='white' style={{marginTop: moderateScale(24)}}>SHARE</Button>
        </Card>
    )
}

export default WhatsAppCard

const styles = StyleSheet.create({
})
