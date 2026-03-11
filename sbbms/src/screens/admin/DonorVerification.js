import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AuthContext } from '../../store/AuthContext';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Mock list of recent donors to verify
const donorsToVerify = [
  { id: '1', name: 'Arun T.', group: 'O+', time: 'Today, 10:00 AM', status: 'Pending' },
  { id: '2', name: 'Bikash Rai', group: 'A-', time: 'Today, 11:30 AM', status: 'Pending' },
];

export default function DonorVerification() {
    const { logout, login } = useContext(AuthContext);
  return (
    <ScrollView className="flex-1 bg-background p-4 mt-10">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-3xl font-bold text-accent">Verify Donors</Text>
      </View>

      <Text className="text-gray-500 mb-4">
        Verify walk-in donors and add their donations to the total stock.
      </Text>

      {donorsToVerify.map(donor => (
        <Card key={donor.id} className="mb-4 shadow-sm border-[0.5px] border-gray-200">
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center">
              <View className="bg-primary/10 p-2 rounded-full mr-3">
                <Icon name="person" size={24} color="#C62828" />
              </View>
              <View>
                <Text className="text-lg font-bold text-accent">{donor.name}</Text>
                <Text className="text-gray-500 text-sm">Donated: {donor.time}</Text>
              </View>
            </View>
            <View className="items-center justify-center bg-gray-100 h-12 w-12 rounded-lg">
              <Text className="font-black text-primary text-lg">{donor.group}</Text>
            </View>
          </View>

          <Button title="Verify & Add to Stock" variant="primary" onPress={() => {}} />
        </Card>
      ))}

      <View className="mt-10 mb-8 pt-8 border-t border-gray-200">
        <Button 
            title="Switch Roles (Dev)" 
            variant="outline" 
            className="mb-4"
            onPress={() => login('donor')}
        />
        <Button 
            title="Logout" 
            variant="danger" 
            onPress={logout} 
        />
      </View>
    </ScrollView>
  );
}
