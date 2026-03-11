import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../store/AuthContext';
import { InventoryContext } from '../../store/InventoryContext';
import { RequestContext } from '../../store/RequestContext';
import Card from '../../components/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InventoryChart from '../../components/InventoryChart';

export default function AdminDashboard({ navigation }) {
  const { user } = useContext(AuthContext);
  const { bloodStock } = useContext(InventoryContext);
  const { requests } = useContext(RequestContext);

  const pendingRequestsCount = requests?.filter(r => r.status === 'Pending').length || 0;
  
  // Example computation of total inventory
  const totalStock = Object.values(bloodStock).reduce((a, b) => a + b, 0);

  return (
    <ScrollView className="flex-1 bg-background p-4 mt-10" showsVerticalScrollIndicator={false}>
      <Text className="text-3xl font-bold text-accent mb-6">Admin Dashboard</Text>
      
      <View className="flex-row mb-6">
        <TouchableOpacity 
          className="flex-1 bg-white border border-gray-200 p-4 rounded-xl items-center mr-2 shadow-sm"
          onPress={() => navigation.navigate('Inventory')}
        >
          <Text className="text-accent text-sm font-bold mb-1">TOTAL STOCK</Text>
          <Text className="text-primary font-black text-3xl">{totalStock}</Text>
          <Text className="text-gray-500 text-xs">Units Available</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className={`flex-1 ${pendingRequestsCount > 0 ? 'bg-warning/10 border-warning' : 'bg-white border-gray-200'} border p-4 rounded-xl items-center ml-2 shadow-sm`}
          onPress={() => navigation.navigate('Requests')}
        >
          <Text className="text-accent text-sm font-bold mb-1">PENDING REQ</Text>
          <Text className={`${pendingRequestsCount > 0 ? 'text-warning' : 'text-primary'} font-black text-3xl`}>{pendingRequestsCount}</Text>
          <Text className="text-gray-500 text-xs">Waiting Approval</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-xl font-bold text-accent mb-4">Inventory Overview</Text>
      <InventoryChart data={bloodStock} type="pie" className="mb-6" />

      <Text className="text-xl font-bold text-accent mb-4">Quick Actions</Text>
      
      <Card className="mb-4 flex-row items-center shadow-sm p-4">
        <View className="bg-primary/20 p-3 rounded-full mr-4">
          <Icon name="verified-user" size={28} color="#C62828" />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-bold text-accent">Verify Recent Donors</Text>
          <Text className="text-sm text-gray-500">2 donors pending verification</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Donors')}>
          <Text className="text-primary font-bold">Review</Text>
        </TouchableOpacity>
      </Card>
      
      <Card className="mb-8 p-4 bg-primary rounded-xl">
        <View className="flex-row items-center mb-2">
           <Icon name="campaign" size={28} color="#FFFFFF" className="mr-3" />
           <Text className="text-secondary font-bold text-lg">Broadcast Emergency</Text>
        </View>
        <Text className="text-secondary opacity-80 text-sm mb-4">
          Send an urgent push notification to all available nearby donors.
        </Text>
        <TouchableOpacity className="bg-secondary py-2 rounded-lg items-center">
          <Text className="text-primary font-bold">New Broadcast</Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
}
