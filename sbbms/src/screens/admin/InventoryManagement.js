import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { InventoryContext } from '../../store/InventoryContext';
import Card from '../../components/Card';
import InventoryChart from '../../components/InventoryChart';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
import ModalDialog from '../../components/ModalDialog';

export default function InventoryManagement() {
  const { bloodStock, updateStock } = useContext(InventoryContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const bloodGroups = Object.keys(bloodStock);

  const handleUpdate = (group, operation) => {
    updateStock(group, operation === 'add' ? 1 : -1);
  };

  return (
    <View className="flex-1 bg-background pt-10">
      <View className="p-4 border-b border-gray-200 bg-white">
        <Text className="text-3xl font-bold text-accent">Inventory</Text>
      </View>

      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <InventoryChart data={bloodStock} type="bar" className="mb-6 pt-4" />

        <View className="flex-row justify-between items-center mb-4 mt-2">
           <Text className="text-xl font-bold text-accent">Adjust Stock Limits</Text>
           <Text className="text-sm text-gray-500">(Dev Simulation)</Text>
        </View>
        
        <View className="flex-row flex-wrap justify-between pb-8">
          {bloodGroups.map((group) => (
            <Card key={group} className="w-[48%] mb-4 py-3 px-2 flex-col items-center">
              <Text className="text-2xl font-black text-primary mb-1">{group}</Text>
              <Text className="text-accent text-lg font-bold">{bloodStock[group]} <Text className="text-gray-500 font-normal text-sm">Units</Text></Text>
              
              <View className="flex-row mt-4 space-x-4 w-full justify-around">
                <TouchableOpacity 
                   className="bg-gray-200 p-2 rounded-full w-10 h-10 items-center justify-center opacity-80"
                   onPress={() => handleUpdate(group, 'remove')}
                   disabled={bloodStock[group] <= 0}
                >
                  <Icon name="remove" size={24} color="#333333" />
                </TouchableOpacity>
                <TouchableOpacity 
                   className="bg-primary/20 p-2 rounded-full w-10 h-10 items-center justify-center"
                   onPress={() => handleUpdate(group, 'add')}
                >
                  <Icon name="add" size={24} color="#C62828" />
                </TouchableOpacity>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
