import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from '../store/AuthContext';
import { RequestContext } from '../store/RequestContext';
import NotificationBanner from '../components/NotificationBanner';

import AuthNavigator from './AuthNavigator';
import DonorNavigator from './DonorNavigator';
import ReceiverNavigator from './ReceiverNavigator';
import AdminNavigator from './AdminNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user, role } = useContext(AuthContext);
  const { globalNotifications } = useContext(RequestContext);

  const activeNotification =
    globalNotifications && globalNotifications.length > 0
      ? globalNotifications[0]
      : null;

  return (
    <View style={styles.container}>
      {activeNotification ? (
        <NotificationBanner
          visible={true}
          message={activeNotification.message}
          type={activeNotification.type}
          onClose={() => {}}
        />
      ) : null}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!user ? (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          ) : role === 'donor' ? (
            <Stack.Screen name="Donor" component={DonorNavigator} />
          ) : role === 'receiver' ? (
            <Stack.Screen name="Receiver" component={ReceiverNavigator} />
          ) : role === 'admin' ? (
            <Stack.Screen name="Admin" component={AdminNavigator} />
          ) : (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
