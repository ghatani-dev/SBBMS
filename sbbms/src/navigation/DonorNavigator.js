import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DonorDashboard from '../screens/donor/DonorDashboard';
import DonationHistory from '../screens/donor/DonationHistory';
import NearbyEmergencyRequests from '../screens/donor/NearbyEmergencyRequests';
import DonorProfile from '../screens/donor/DonorProfile';

const Tab = createBottomTabNavigator();

export default function DonorNavigator() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Dashboard') iconName = 'dashboard';
            else if (route.name === 'Requests') iconName = 'bloodtype';
            else if (route.name === 'Notifications') iconName = 'notifications';
            else if (route.name === 'Profile') iconName = 'person';
            return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#C62828',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        })}
    >
      <Tab.Screen name="Dashboard" component={DonorDashboard} />
      <Tab.Screen name="Requests" component={DonationHistory} />
      <Tab.Screen name="Notifications" component={NearbyEmergencyRequests} />
      <Tab.Screen name="Profile" component={DonorProfile} />
    </Tab.Navigator>
  );
}
