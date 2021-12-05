import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainContainer from './navigator/MainContainer'
import AuthNavigator from './navigator/AuthNavigator'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from './context/AuthContext'

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userDetails, setuserDetails] = useState({});

  useEffect(() => {
    const getData = async() => {
      try {
        const merchant = await AsyncStorage.getItem('merchant');
        const isDataFilled = await AsyncStorage.getItem('businessDetails');
        (merchant && isDataFilled==='true') && setIsSignedIn(true);
      } 
      catch (err) {
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
      {isSignedIn ? <MainContainer/> : <AuthNavigator/>}
    </AuthContext.Provider>
    )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F6F6F6'
  }
})
