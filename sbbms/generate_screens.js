const fs = require('fs');
const path = require('path');

const screens = [
  'screens/auth/SplashScreen',
  'screens/auth/LoginScreen',
  'screens/auth/RoleSelectionScreen',
  
  'screens/donor/DonorDashboard',
  'screens/donor/DonationHistory',
  'screens/donor/NearbyEmergencyRequests',
  'screens/donor/DonorProfile',
  
  'screens/receiver/ReceiverDashboard',
  'screens/receiver/SearchBloodScreen',
  'screens/receiver/SearchResultsScreen',
  'screens/receiver/RequestBloodScreen',
  'screens/receiver/EmergencyRequestScreen',
  'screens/receiver/RequestStatusScreen',
  'screens/receiver/ReceiverProfile',
  
  'screens/admin/AdminDashboard',
  'screens/admin/InventoryManagement',
  'screens/admin/RequestManager',
  'screens/admin/DonorVerification',
];

const template = (name) => `import React from 'react';
import { View, Text } from 'react-native';

export default function ${name}() {
  return (
    <View className="flex-1 bg-background items-center justify-center">
      <Text className="text-xl font-bold text-accent">${name}</Text>
    </View>
  );
}
`;

screens.forEach((screenPath) => {
  const fullPath = path.join(__dirname, 'src', screenPath + '.js');
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const name = path.basename(screenPath);
  fs.writeFileSync(fullPath, template(name));
  console.log(`Created ${fullPath}`);
});
