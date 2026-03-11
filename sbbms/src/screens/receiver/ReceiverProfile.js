import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AuthContext } from '../../store/AuthContext';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ReceiverProfile() {
  const { logout, login } = useContext(AuthContext);

  return (
    <ScrollView className="flex-1 bg-background p-4 mt-10" showsVerticalScrollIndicator={false}>
      <Text className="text-3xl font-bold text-accent mb-6">Profile</Text>
      
      <View className="items-center mb-8">
        <View className="bg-primary/20 h-28 w-28 rounded-full items-center justify-center mb-4">
          <Icon name="person" size={64} color="#C62828" />
        </View>
        <Text className="text-2xl font-bold text-accent">Rahul Sharma</Text>
        <Text className="text-gray-500 text-lg">+91 9789012345</Text>
      </View>

      <Button title="Logout" variant="danger" onPress={logout} className="mb-8" />
      
      <Text className="text-center text-gray-500 mb-4">Developer Tools (Switch Roles)</Text>
      <Button 
        title="Switch to Admin Mode" 
        variant="outline" 
        onPress={() => login('admin')} 
        className="mb-4"
      />
      <Button 
        title="Switch to Donor Mode" 
        variant="outline" 
        onPress={() => login('donor')} 
        className="mb-10"
      />
    </ScrollView>
  );
}
