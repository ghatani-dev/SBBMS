import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Card from '../../components/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MOCK_HISTORY = [
  { id: '1', date: 'Jan 12, 2026', hospital: 'STNM Hospital', bloodGroup: 'O+', units: 1, status: 'Completed' },
  { id: '2', date: 'Jul 04, 2025', hospital: 'General Hospital', bloodGroup: 'O+', units: 1, status: 'Completed' },
  { id: '3', date: 'Feb 14, 2025', hospital: 'City Blood Bank', bloodGroup: 'O+', units: 1, status: 'Completed' },
];

export default function DonationHistory() {
  const renderItem = ({ item }) => (
    <Card className="flex-row items-center border-l-4 border-l-success p-4 mb-4">
      <View className="bg-success/10 p-3 rounded-full mr-4">
        <Icon name="check-circle" size={28} color="#2E7D32" />
      </View>
      <View className="flex-[2]">
        <Text className="text-lg font-bold text-accent">{item.hospital}</Text>
        <Text className="text-gray-500">{item.date}</Text>
      </View>
      <View className="items-end flex-1">
        <Text className="text-xl font-black text-primary">{item.bloodGroup}</Text>
        <Text className="text-gray-500 text-xs">1 Unit</Text>
      </View>
    </Card>
  );

  return (
    <View className="flex-1 bg-background p-4 mt-10">
      <Text className="text-3xl font-bold text-accent mb-6">Donation History</Text>
      
      {MOCK_HISTORY.length > 0 ? (
        <FlatList
          data={MOCK_HISTORY}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View className="flex-1 items-center justify-center">
          <Icon name="history" size={64} color="#E0E0E0" />
          <Text className="text-gray-500 text-lg text-center mt-4">
            You haven't made any donations yet.
            Your journey to save lives starts here!
          </Text>
        </View>
      )}
    </View>
  );
}
