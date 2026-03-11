import React, { useContext, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AuthContext } from '../../store/AuthContext';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ToggleSwitch from '../../components/ToggleSwitch';
import NotificationBanner from '../../components/NotificationBanner';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DonorDashboard({ navigation }) {
  const { user } = useContext(AuthContext);
  const [isAvailable, setIsAvailable] = useState(true);
  const [showEmergency, setShowEmergency] = useState(true);

  return (
    <View className="flex-1 bg-background">
      <NotificationBanner
        visible={showEmergency}
        message="URGENT: B+ blood needed at STNM Hospital (2 km away)"
        type="error"
        onClose={() => setShowEmergency(false)}
      />

      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <View className="mt-12 mb-6">
          <Text className="text-3xl font-bold text-accent">Hello, Donor</Text>
          <Text className="text-gray-500">Your blood type: O+</Text>
        </View>

        <Card className="mb-6 p-4">
          <View className="flex-row items-center mb-4">
            <View className="bg-primary/20 p-3 rounded-full mr-4">
              <Icon name="bloodtype" size={32} color="#C62828" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-bold text-accent">Last Donation</Text>
              <Text className="text-gray-500">Jan 12, 2026</Text>
            </View>
          </View>
          <View className="bg-gray-100 p-3 rounded-lg mb-4">
            <Text className="text-accent text-center font-bold">
              Eligible to donate again in: <Text className="text-success">24 days</Text>
            </Text>
          </View>
          <ToggleSwitch
            label="Available for emergency?"
            value={isAvailable}
            onValueChange={setIsAvailable}
          />
        </Card>

        <Text className="text-xl font-bold text-accent mb-4">Urgent Requests Near You</Text>
        
        <Card className="border-l-4 border-l-primary">
          <View className="flex-row justify-between items-start mb-2">
            <View>
              <Text className="text-lg font-bold text-primary">B+ Needed Immediately</Text>
              <Text className="text-gray-500">STNM Hospital • 2.4 km</Text>
            </View>
            <Text className="text-xs bg-primary/10 text-primary p-1 rounded font-bold">Critical</Text>
          </View>
          <Text className="text-gray-700 mb-4">Accident victim requires 2 units of B+ blood. Hospital staff verified.</Text>
          <View className="flex-row">
            <View className="flex-1 mr-2">
              <Button title="Respond Now" variant="danger" onPress={() => {}} />
            </View>
            <View className="flex-1 ml-2">
              <Button title="Later" variant="outline" onPress={() => {}} />
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}
