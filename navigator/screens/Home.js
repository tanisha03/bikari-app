import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import Container from '../../components/atoms/Container'
import BusinessOverviewGrid from '../../components/compounds/BusinessOverviewGrid'
import ProfileCard from '../../components/molecules/ProfileCard'
import WhatsAppCard from '../../components/molecules/WhatsaAppCard'
import { AuthContext } from '../../context/AuthContext';
import { getAnalytics, getMerchantDetails } from '../../utils/api'

const Home = (props) => {
    const {userDetails, setuserDetails} = React.useContext(AuthContext);
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
        getMerchantDetails(userDetails.phoneNumber)
        .then((res) => {
          if(res){
            setuserDetails(res.responseData.merchant);
          }
          setSplash(false);
        })
        .catch(err => setSplash(false));
    }, [])

    return (
        <Container>
              <WhatsAppCard/>
              <ProfileCard  navigation={props.navigation}/>
              <BusinessOverviewGrid data={userDetails}/>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding:20,
    }
})
