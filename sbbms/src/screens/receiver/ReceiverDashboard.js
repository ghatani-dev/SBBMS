import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../store/AuthContext';
import Card from '../../components/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ReceiverDashboard({ navigation }) {
  const { user } = useContext(AuthContext);

  return (
    <ScrollView className="flex-1 bg-background p-4 mt-10" showsVerticalScrollIndicator={false}>
      <Text className="text-3xl font-bold text-accent mb-6">Hello, User</Text>

      <View className="flex-row mb-6">
        <TouchableOpacity 
          className="flex-1 bg-primary p-6 rounded-2xl items-center mr-2 shadow-sm"
          onPress={() => navigation.navigate('Search')}
        >
          <Icon name="search" size={40} color="#FFFFFF" className="mb-2" />
          <Text className="text-secondary font-bold text-center mt-2">Search Blood</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-1 bg-[#F57C00] p-6 rounded-2xl items-center ml-2 shadow-sm"
          onPress={() => navigation.navigate('Requests')}
        >
          <Icon name="local-hospital" size={40} color="#FFFFFF" className="mb-2" />
          <Text className="text-secondary font-bold text-center mt-2">Request Blood</Text>
        </TouchableOpacity>
      </View>

      <Card className="mb-6 bg-red-50 border-primary">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center flex-1">
             <Icon name="warning" size={28} color="#C62828" className="mr-3" />
             <Text className="text-primary font-bold text-lg flex-1">Emergency Donor Request</Text>
          </View>
        </View>
        <Text className="text-accent mb-4">
          Can't find blood? Alert all available donors within a 5km radius immediately.
        </Text>
        <TouchableOpacity 
          className="bg-primary py-3 rounded-lg items-center"
          onPress={() => navigation.navigate('Requests', { isEmergency: true })}
        >
          <Text className="text-secondary font-bold">Send Emergency Alert</Text>
        </TouchableOpacity>
      </Card>

      <Text className="text-xl font-bold text-accent mb-4">Nearby Blood Banks</Text>
      
      <Card className="mb-4 flex-row items-center border-[0.5px] border-gray-200 shadow-sm p-4">
        <View className="bg-gray-100 p-3 rounded-full mr-4">
          <Icon name="business" size={28} color="#333333" />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-bold text-accent">STNM Hospital Blood Bank</Text>
          <Text className="text-sm text-gray-500">Sochyagang, Gangtok • 1.2 km</Text>
        </View>
      </Card>
      
      <Card className="mb-8 flex-row items-center border-[0.5px] border-gray-200 shadow-sm p-4">
        <View className="bg-gray-100 p-3 rounded-full mr-4">
          <Icon name="business" size={28} color="#333333" />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-bold text-accent">Central Referral Hospital</Text>
          <Text className="text-sm text-gray-500">Tadong, Gangtok • 3.5 km</Text>
        </View>
      </Card>
    </ScrollView>
  );
}
