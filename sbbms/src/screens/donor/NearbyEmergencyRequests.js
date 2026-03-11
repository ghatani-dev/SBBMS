import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { RequestContext } from '../../store/RequestContext';

export default function NearbyEmergencyRequests() {
  // Using context to fetch active requests, applying a dummy filter for emergencies
  const { requests } = useContext(RequestContext);
  
  // Dummy emergency data
  const emergencies = [
    { id: 'e1', hospital: 'STNM Hospital', distance: '2.4 km', bloodGroup: 'O-', units: 2, urgency: 'Critical', time: '10 mins ago' },
    { id: 'e2', hospital: 'City Medical Center', distance: '5.1 km', bloodGroup: 'O+', units: 1, urgency: 'High', time: '1 hour ago' },
  ];

  return (
    <View className="flex-1 bg-background p-4 mt-10">
      <Text className="text-3xl font-bold text-accent mb-2">Emergency Alerts</Text>
      <Text className="text-gray-500 mb-6 flex-1 max-h-6">Notifications based on your current location.</Text>
      
      {emergencies.length > 0 ? (
        <FlatList
          data={emergencies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card className="border-l-4 border-l-primary mb-4 p-4 shadow-xl">
              <View className="flex-row justify-between items-start mb-2">
                <View>
                  <Text className="text-lg font-bold text-accent">{item.hospital}</Text>
                  <Text className="text-gray-500">{item.distance} away • {item.time}</Text>
                </View>
                <View className="items-end">
                  <Text className="text-2xl font-black text-primary">{item.bloodGroup}</Text>
                  <Text className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-bold mt-1">
                    {item.urgency}
                  </Text>
                </View>
              </View>
              <Text className="text-gray-700 mb-4 bg-gray-100 p-2 rounded">
                Verified request by hospital staff. Needs {item.units} unit(s).
              </Text>
              <Button title="Accept Emergency Request" variant="danger" onPress={() => {}} />
            </Card>
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500 text-lg text-center">
            There are currently no active emergency requests near you.
          </Text>
        </View>
      )}
    </View>
  );
}
