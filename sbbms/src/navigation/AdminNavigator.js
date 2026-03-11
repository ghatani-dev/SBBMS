import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AdminDashboard from '../screens/admin/AdminDashboard';
import InventoryManagement from '../screens/admin/InventoryManagement';
import RequestManager from '../screens/admin/RequestManager';
import DonorVerification from '../screens/admin/DonorVerification';

const Tab = createBottomTabNavigator();

export default function AdminNavigator() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Dashboard') iconName = 'dashboard';
            else if (route.name === 'Inventory') iconName = 'inventory';
            else if (route.name === 'Requests') iconName = 'list-alt';
            else if (route.name === 'Donors') iconName = 'verified-user';
            return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#C62828',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        })}
    >
      <Tab.Screen name="Dashboard" component={AdminDashboard} />
      <Tab.Screen name="Inventory" component={InventoryManagement} />
      <Tab.Screen name="Requests" component={RequestManager} />
      <Tab.Screen name="Donors" component={DonorVerification} />
    </Tab.Navigator>
  );
}
