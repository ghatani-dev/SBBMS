import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RequestContext } from '../../store/RequestContext';
import { InventoryContext } from '../../store/InventoryContext';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RequestManager() {
  const { requests, updateRequestStatus } = useContext(RequestContext);
  const { updateStock } = useContext(InventoryContext);

  const pendingRequests = requests.filter(req => req.status === 'Pending').reverse();
  const historyRequests = requests.filter(req => req.status !== 'Pending').reverse();

  const handleApprove = (req) => {
    updateRequestStatus(req.id, 'Approved');
    updateStock(req.bloodGroup, -req.units); // Deduct from stock when approved
  };

  const handleReject = (req) => {
    updateRequestStatus(req.id, 'Rejected');
  };

  const renderItem = ({ item }) => (
    <Card className="mb-4">
      <View className="flex-row justify-between mb-2">
        <Text className="text-lg font-bold text-accent">{item.patientName}</Text>
        <Text className="text-xs font-bold bg-warning/10 text-warning px-2 py-1 rounded">
          {item.status}
        </Text>
      </View>
      
      <View className="flex-row mb-4">
        <View className="flex-row items-center mr-4 bg-gray-100 px-2 py-1 rounded">
           <Icon name="bloodtype" size={16} color="#C62828" className="mr-1" />
           <Text className="text-primary font-bold">{item.units} Units of {item.bloodGroup}</Text>
        </View>
        <Text className="text-gray-500 py-1">{item.hospital}</Text>
      </View>

      <View className="flex-row">
        <View className="flex-1 mr-2">
          <Button 
            title="Approve & Deduct" 
            onPress={() => handleApprove(item)} 
          />
        </View>
        <View className="flex-1 ml-2">
          <Button 
            title="Reject" 
            variant="outline" 
            onPress={() => handleReject(item)} 
          />
        </View>
      </View>
    </Card>
  );

  return (
    <View className="flex-1 bg-background pt-10">
      <View className="p-4 border-b border-gray-200 bg-white">
        <Text className="text-3xl font-bold text-accent">Incoming Requests</Text>
      </View>
      
      <View className="flex-1 p-4">
        {pendingRequests.length > 0 ? (
          <FlatList
            data={pendingRequests}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View className="flex-1 items-center justify-center">
            <Icon name="done-all" size={64} color="#E0E0E0" />
            <Text className="text-gray-500 text-lg mt-4">No pending requests right now.</Text>
          </View>
        )}
      </View>
    </View>
  );
}
