import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainContainer from './navigator/MainContainer'
import AuthNavigator from './navigator/AuthNavigator'

import { AuthContext } from './context/AuthContext'

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <AuthContext.Provider value={{
      setIsSignedIn: setIsSignedIn
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
