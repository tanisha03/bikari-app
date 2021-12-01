import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Container from '../../components/atoms/Container'
import OffersCard from '../../components/molecules/OffersCard'
import FAB from '../../components/atoms/FAB';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Offers = ({navigation}) => {
    let offers = [
        {
            title: 'Super Bonzana Offer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            title: 'Diwali Dhamaka Offer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            title: 'Diwali Dhamaka Offer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
    ];
    return (
        <>
        <FAB onPress={() => navigation.navigate('NewOffer')}>
            <Ionicons name={'add'} size={24} color={'white'}/>
        </FAB>
        <Container>
            {
                offers.map(offer => (
                    <OffersCard key={offer.index} title={offer.title} description={offer.description}/>
                ))
            }
        </Container>
        </>
    )
}

export default Offers

const styles = StyleSheet.create({})
