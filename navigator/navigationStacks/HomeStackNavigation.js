import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import Profile from '../screens/Profile'
import Home from '../screens/Home'

const Stack = createStackNavigator()

const HomeStackNavigation = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen 
                name="Bikari"
                component={Home}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
        </Stack.Navigator>
    )
}
export default HomeStackNavigation;

