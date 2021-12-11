import React,{useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import Container from '../../components/atoms/Container'
import OffersCard from '../../components/molecules/OffersCard'
import FAB from '../../components/atoms/FAB';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../context/AuthContext';
import Heading from '../../components/atoms/Heading';
import { getOffers } from '../../utils/api';

const Offers = ({navigation}) => {
    const {userDetails, setuserDetails} = React.useContext(AuthContext);
    const [offers, setOffers] = useState(userDetails?.offers?.reverse() || []);

    useEffect(() => {
        getOffers(userDetails.phoneNumber)
        .then((res) => {
            setOffers(res.responseData.data.reverse());
            setuserDetails((prevProps) => ({
                ...prevProps,
                offers: res.responseData.data.reverse()
            }));
        })
        .catch(err => console.log(err))
    })
    return (
        <>
        <FAB onPress={() => navigation.navigate('Create', {first: false})}>
            <Ionicons name={'add'} size={24} color={'white'}/>
        </FAB>
        <Container>
            {
                offers.length!==0 ? offers.map(offer => (
                    <OffersCard key={offer.offerId} data={offer}/>
                )) : <Heading>Create a new offer!</Heading>
            }
        </Container>
        </>
    )
}

export default Offers

const styles = StyleSheet.create({})
