import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import NewOfferForm from '../screens/NewOfferForm'
import Offers from '../screens/Offers'

const Stack = createStackNavigator()

const OffersStackNavigation = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen 
                name="Offers"
                component={Offers}
            />
            <Stack.Screen
                name="NewOffer"
                component={NewOfferForm}
            />
        </Stack.Navigator>
    )
}
export default OffersStackNavigation;

