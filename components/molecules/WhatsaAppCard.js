import React from 'react'
import { StyleSheet, Linking } from 'react-native';
import Text from '../atoms/Text';
import Card from '../atoms/Card';
import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import {moderateScale} from '../../config/scale';
import { AuthContext } from '../../context/AuthContext';
import { sendWhatsAppMessage } from '../../utils/linking';

const WhatsAppCard = () => {
    const {userDetails} = React.useContext(AuthContext);

    return (
        <Card bg='white' style={{marginBottom: moderateScale(28)}}>
            <Heading>Share offers on WhatsApp</Heading>
            <Text>Share with your customers to stay upto date with your offer list</Text>
            <Button bg='#4BCA5A' color='white' style={{marginTop: moderateScale(24)}} onPress={() => sendWhatsAppMessage(`https://wa.me/?text=%${userDetails.storeWhatsappMsg}`)}>SHARE</Button>
        </Card>
    )
}

export default WhatsAppCard

const styles = StyleSheet.create({
})
