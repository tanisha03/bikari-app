import React from 'react'
import { StyleSheet, Image, View, Share } from 'react-native';
import Text from '../atoms/Text';
import Card from '../atoms/Card';
import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import {broadcastOffer} from '../../utils/api';
import { Toast } from '../../utils/alerts';


const OffersCard = ({data}) => {

    const handleBroadcast = () => {
        broadcastOffer(data.merchantPhoneNumber, data.offerId);
        Toast('Offer Broadcasted');
    };

    const handleShare = async(msg, url) => {
        Share.share({
            title: 'Offer',
            message: msg,
            url: url
          });
    }

    return (
        <Card bg='white' style={{marginBottom: 20}}>
            <Image style={styles.image} source={{uri: data.offerBannerUrl}} />
            <Heading>{data.offerName}</Heading>
            <Text>{data.offerDescription}</Text>
            <View style={styles.btnTab}>
                <View style={{width: '45%', height: 50}}>
                    {/* <Button outline='black' color='black' style={styles.btn} onPress={() => sendWhatsAppMessage(`https://wa.me/?text=%${data.whatsappMsg}`)}>Share</Button> */}
                    <Button outline='black' color='black' style={styles.btn} onPress={() => handleShare(data.whatsappMsg, data.offerBannerUrl)}>Share</Button>

                </View>
                <View style={{width: '45%', height: 50}}>
                    <Button bg='#4C5FAD' color='white' onPress={handleBroadcast}>Broadcast</Button>
                </View>
            </View>
        </Card>
    )
}

export default OffersCard

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 100
    },
    btnTab: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        height: 40
    },
    btn: {
       borderWidth:1,
       borderColor:'#333',
       alignItems:'center',
       justifyContent:'center',
       borderRadius:5,
    }
})
