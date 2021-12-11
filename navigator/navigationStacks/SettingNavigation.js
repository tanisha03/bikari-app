import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import Settings from '../screens/Settings'
import BusinessDetails from '../screens/BusinessDetails'

const Stack = createStackNavigator()

const SettingsStackNavigation = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen 
                name="Settings"
                component={Settings}
            />
            <Stack.Screen
                name="Edit"
                component={BusinessDetails}
            />
        </Stack.Navigator>
    )
}
export default SettingsStackNavigation;

