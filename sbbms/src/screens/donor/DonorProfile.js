import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AuthContext } from '../../store/AuthContext';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DonorProfile() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <ScrollView className="flex-1 bg-background p-4 mt-10" showsVerticalScrollIndicator={false}>
      <Text className="text-3xl font-bold text-accent mb-6">Profile</Text>
      
      <View className="items-center mb-8">
        <View className="bg-primary/20 h-28 w-28 rounded-full items-center justify-center mb-4">
          <Icon name="person" size={64} color="#C62828" />
        </View>
        <Text className="text-2xl font-bold text-accent">John Doe</Text>
        <Text className="text-gray-500 text-lg">+91 9876543210</Text>
      </View>

      <Card className="mb-4 flex-row items-center border-[0.5px] border-gray-200 shadow-sm p-4">
        <View className="bg-gray-100 p-3 rounded-full mr-4">
          <Icon name="bloodtype" size={28} color="#C62828" />
        </View>
        <View className="flex-1">
          <Text className="text-sm text-gray-500">Blood Group</Text>
          <Text className="text-lg font-bold text-accent">O Positive (O+)</Text>
        </View>
      </Card>

      <Card className="mb-8 flex-row items-center border-[0.5px] border-gray-200 shadow-sm p-4">
        <View className="bg-gray-100 p-3 rounded-full mr-4">
          <Icon name="location-on" size={28} color="#333333" />
        </View>
        <View className="flex-1">
          <Text className="text-sm text-gray-500">Registered Address</Text>
          <Text className="text-lg font-bold text-accent">Gangtok, Sikkim</Text>
        </View>
      </Card>
      
      <Button 
        title="Admin Mode (Dev)" 
        variant="outline" 
        onPress={() => login('admin')} 
        className="mb-4"
      />
      <Button 
        title="Receiver Mode (Dev)" 
        variant="outline" 
        onPress={() => login('receiver')} 
        className="mb-4"
      />

      <Button title="Logout" variant="danger" onPress={logout} className="mt-4 mb-10" />
    </ScrollView>
  );
}
