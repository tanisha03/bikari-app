import React from 'react'
import { StyleSheet } from 'react-native'
import Container from '../../components/atoms/Container'
import BusinessOverviewGrid from '../../components/compounds/BusinessOverviewGrid'
import ProfileCard from '../../components/molecules/ProfileCard'
import WhatsAppCard from '../../components/molecules/WhatsaAppCard'

const Home = (props) => {
    return (
        <Container>
              <WhatsAppCard/>
              <ProfileCard  navigation={props.navigation}/>
              <BusinessOverviewGrid/>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding:20,
    }
})
