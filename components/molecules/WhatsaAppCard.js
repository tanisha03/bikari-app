import React from 'react'
import { StyleSheet, Linking } from 'react-native';
import Text from '../atoms/Text';
import Card from '../atoms/Card';
import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import {moderateScale} from '../../config/scale';

const WhatsAppCard = () => {
    const sendWhatsAppMessage = link => {
        if (!(link===undefined)) {
         Linking.canOpenURL(link)
          .then(supported => {
            if (!supported) {
             alert(
               'Please install whats app to send direct message to students via whatsapp'
             );
           } else {
             return Linking.openURL(link);
           }
         })
         .catch(err => console.error('An error occurred', err));
       } else {
         console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
        }
       };

    return (
        <Card bg='white' style={{marginBottom: moderateScale(28)}}>
            <Heading>Share offers on WhatsApp</Heading>
            <Text>Share with your customers to stay upto date with your offer list</Text>
            <Button bg='#4BCA5A' color='white' style={{marginTop: moderateScale(24)}} onPress={() => sendWhatsAppMessage('https://wa.me/?text=%7B0%7D+Balaji+CTest')}>SHARE</Button>
        </Card>
    )
}

export default WhatsAppCard

const styles = StyleSheet.create({
})
