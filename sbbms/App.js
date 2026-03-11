import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from './src/store/AuthContext';
import { InventoryProvider } from './src/store/InventoryContext';
import { RequestProvider } from './src/store/RequestContext';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <InventoryProvider>
          <RequestProvider>
            <View style={styles.container}>
              <RootNavigator />
              <StatusBar style="auto" />
            </View>
          </RequestProvider>
        </InventoryProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
