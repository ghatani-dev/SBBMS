import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ReceiverDashboard from '../screens/receiver/ReceiverDashboard';
import SearchBloodScreen from '../screens/receiver/SearchBloodScreen';
import RequestBloodScreen from '../screens/receiver/RequestBloodScreen';
import ReceiverProfile from '../screens/receiver/ReceiverProfile';

const Tab = createBottomTabNavigator();

export default function ReceiverNavigator() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Search') iconName = 'search';
            else if (route.name === 'Requests') iconName = 'local-hospital';
            else if (route.name === 'Profile') iconName = 'person';
            return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#C62828',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        })}
    >
      <Tab.Screen name="Home" component={ReceiverDashboard} />
      <Tab.Screen name="Search" component={SearchBloodScreen} />
      <Tab.Screen name="Requests" component={RequestBloodScreen} />
      <Tab.Screen name="Profile" component={ReceiverProfile} />
    </Tab.Navigator>
  );
}
