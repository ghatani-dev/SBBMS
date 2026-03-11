import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function SearchBloodScreen({ navigation }) {
  const [bloodGroup, setBloodGroup] = useState('');
  const [district, setDistrict] = useState('');
  const [hospital, setHospital] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // Mock Dropdown Data
  const bloodGroups = [
    { label: 'O Positive (O+)', value: 'O+' },
    { label: 'A Positive (A+)', value: 'A+' },
    { label: 'B Positive (B+)', value: 'B+' },
    { label: 'AB Positive (AB+)', value: 'AB+' },
    { label: 'O Negative (O-)', value: 'O-' },
  ];

  const districts = [
    { label: 'Gangtok', value: 'Gangtok' },
    { label: 'Namchi', value: 'Namchi' },
    { label: 'Gyalshing', value: 'Gyalshing' },
    { label: 'Mangan', value: 'Mangan' },
  ];

  const hospitals = [
    { label: 'STNM Hospital', value: 'STNM' },
    { label: 'Central Referral Hospital', value: 'CRH' },
    { label: 'Namchi District Hospital', value: 'Namchi' },
    { label: 'Any', value: 'Any' },
  ];

  const handleSearch = () => {
    // Navigate to SearchResultsScreen passing the params, 
    // but for now let's just show dummy results in line for the demo prototype
    setHasSearched(true);
  };

  return (
    <ScrollView className="flex-1 bg-background p-4 mt-10">
      <Text className="text-3xl font-bold text-accent mb-6">Search Blood Inventory</Text>

      <Card className="p-6 mb-6">
        <Dropdown
          label="Blood Group"
          data={bloodGroups}
          selectedValue={bloodGroup}
          onSelect={setBloodGroup}
          placeholder="Select blood group"
        />

        <Dropdown
          label="District"
          data={districts}
          selectedValue={district}
          onSelect={setDistrict}
          placeholder="Select district"
        />

        <Dropdown
          label="Hospital"
          data={hospitals}
          selectedValue={hospital}
          onSelect={setHospital}
          placeholder="Select hospital"
        />

        <Button 
          title="Search Inventory" 
          onPress={handleSearch} 
          disabled={!bloodGroup || !district} 
          className="mt-4"
        />
      </Card>

      {hasSearched && (
        <View className="mb-10">
          <Text className="text-xl font-bold text-accent mb-4">Search Results</Text>
          
          <Card className="mb-4">
             <View className="flex-row justify-between mb-4">
               <View>
                 <Text className="text-xl font-bold text-accent">STNM Hospital</Text>
                 <Text className="text-gray-500">Gangtok District</Text>
               </View>
               <View className="items-end">
                 <Text className="text-xs text-success font-bold bg-success/10 px-2 py-1 rounded">Available</Text>
                 <Text className="text-gray-500 text-xs mt-1">Updated 2m ago</Text>
               </View>
             </View>
             <View className="flex-row items-center border-[0.5px] border-gray-200 rounded p-3 mb-4">
                <Text className="text-2xl font-black text-primary mr-4">{bloodGroup}</Text>
                <Text className="text-lg text-accent"><Text className="font-bold">12</Text> Units Available</Text>
             </View>
             <Button title="Request Blood" onPress={() => navigation.navigate('Requests')} />
          </Card>

           <Card className="mb-4">
             <View className="flex-row justify-between mb-4">
               <View>
                 <Text className="text-xl font-bold text-accent">Central Referral Hospital</Text>
                 <Text className="text-gray-500">Gangtok District</Text>
               </View>
               <View className="items-end">
                 <Text className="text-xs text-primary font-bold bg-primary/10 px-2 py-1 rounded">Low Stock</Text>
                 <Text className="text-gray-500 text-xs mt-1">Updated 1h ago</Text>
               </View>
             </View>
             <View className="flex-row items-center border-[0.5px] border-gray-200 rounded p-3 mb-4">
                <Text className="text-2xl font-black text-primary mr-4">{bloodGroup}</Text>
                <Text className="text-lg text-accent"><Text className="font-bold">2</Text> Units Available</Text>
             </View>
             <Button title="Request Blood" onPress={() => navigation.navigate('Requests')} />
          </Card>
        </View>
      )}
    </ScrollView>
  );
}
