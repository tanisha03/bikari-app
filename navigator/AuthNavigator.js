import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import SignIn from './screens/SignIn'
import Setup from './screens/Setup'
import BusinessDetails from './screens/BusinessDetails'
import NewOfferForm from './screens/NewOfferForm'

const Stack = createStackNavigator()

export default function AuthNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name="SignIn"
                    component={SignIn}
                />
                <Stack.Screen
                    name="Setup"
                    component={Setup}
                />
                <Stack.Screen
                    name="BusinessDetails"
                    component={BusinessDetails}
                />
                <Stack.Screen
                    name="NewOfferForm"
                    component={NewOfferForm}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
