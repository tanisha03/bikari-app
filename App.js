import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainContainer from './navigator/MainContainer'
import AuthNavigator from './navigator/AuthNavigator'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './components/atoms/Splash';
import { AuthContext } from './context/AuthContext'
import {getMerchantDetails} from './utils/api';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userDetails, setuserDetails] = useState({});
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const getData = async() => {
      try {
        const merchant = await AsyncStorage.getItem('merchant');
        const isDataFilled = await AsyncStorage.getItem('businessDetails');
        getMerchantDetails(merchant)
        .then((res) => {
          if(res){
            setuserDetails(res.responseData.merchant);
            (merchant && isDataFilled==='true') && setIsSignedIn(true);
          }
          setSplash(false);
        })
        .catch(err => setSplash(false));
      } 
      catch (err) {
          setSplash(false);
          console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <AuthContext.Provider value={{
      setIsSignedIn: setIsSignedIn,
      userDetails: userDetails,
      setuserDetails: setuserDetails
      }}>
        {
          splash ? <Splash/> : (
            isSignedIn ? <MainContainer/> : <AuthNavigator/>
          )
        }
    </AuthContext.Provider>
    )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F6F6F6'
  }
})
