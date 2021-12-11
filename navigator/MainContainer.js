import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens 
import HomeStackNavigation from './navigationStacks/HomeStackNavigation';
import OffersStackNavigation from './navigationStacks/offersNavigation';
import SettingsStackNavigation from './navigationStacks/SettingNavigation';

const Tab = createBottomTabNavigator();


const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Home'}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === 'Offer') {
                        iconName = focused ? 'bookmark' : 'bookmark-outline';

                        } else if (rn === 'Setting') {
                        iconName = focused ? 'settings' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                })}
                tabBarOptions={{
                    activeTintColor: '#4F60B0',
                    inactiveTintColor: '#929292',
                    showLabel: false,
                    style: { padding: 10, height: 100}
                }}>

                <Tab.Screen name={'Home'} component={HomeStackNavigation} />
                <Tab.Screen name={'Offer'} component={OffersStackNavigation} />
                <Tab.Screen name={'Setting'} component={SettingsStackNavigation} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer

