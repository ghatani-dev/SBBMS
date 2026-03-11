import React, { useContext, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import { RequestContext } from '../../store/RequestContext';

export default function RequestBloodScreen({ navigation, route }) {
  const { createRequest, requests } = useContext(RequestContext);
  const [patientName, setPatientName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [units, setUnits] = useState('');
  const [hospital, setHospital] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isEmergency = route?.params?.isEmergency || false;

  const bloodGroups = [
    { label: 'O+', value: 'O+' }, { label: 'A+', value: 'A+' },
    { label: 'B+', value: 'B+' }, { label: 'AB+', value: 'AB+' },
  ];

  const hospitals = [
    { label: 'STNM Hospital', value: 'STNM Hospital' },
    { label: 'Central Referral Hospital', value: 'CRH' },
    { label: 'Namchi DB Hospital', value: 'Namchi Hospital' },
  ];

  const handleSubmit = () => {
    if (patientName && bloodGroup && units && hospital) {
      createRequest({
        patientName,
        bloodGroup,
        units: parseInt(units, 10),
        hospital,
        date: new Date().toLocaleDateString(),
        isEmergency,
      });
      setSubmitted(true);
      
      // Reset after 3 seconds to show list
      setTimeout(() => {
        setSubmitted(false);
        setPatientName('');
        setUnits('');
        setBloodGroup('');
        setHospital('');
      }, 3000);
    }
  };

  const myRequests = requests || [];

  return (
    <ScrollView className="flex-1 bg-background p-4 mt-10">
      <Text className="text-3xl font-bold text-accent mb-6">Request Blood</Text>
      
      {submitted ? (
         <Card className="items-center p-8 bg-success/10 border-success border-2">
            <Text className="text-success text-6xl mb-4">✓</Text>
            <Text className="text-xl font-bold text-accent mb-2">Request Submitted!</Text>
            <Text className="text-center text-gray-500 max-w-[200px]">
              The hospital blood bank will verify your request.
            </Text>
         </Card>
      ) : (
        <Card className="mb-8 p-6">
          <InputField
            label="Patient Name"
            placeholder="Name as per prescription"
            value={patientName}
            onChangeText={setPatientName}
          />
          <Dropdown
            label="Blood Group Required"
            data={bloodGroups}
            selectedValue={bloodGroup}
            onSelect={setBloodGroup}
          />
          <InputField
            label="Units Required"
            placeholder="e.g. 2"
            keyboardType="number-pad"
            value={units}
            onChangeText={setUnits}
          />
          <Dropdown
            label="Admitted Hospital"
            data={hospitals}
            selectedValue={hospital}
            onSelect={setHospital}
          />
          
          <Button 
            title="Submit Request" 
            onPress={handleSubmit} 
            disabled={!patientName || !bloodGroup || !units || !hospital}
            className="mt-6"
          />
        </Card>
      )}

      {myRequests.length > 0 && (
         <View className="mb-10">
            <Text className="text-xl font-bold text-accent mb-4">My Requests Status</Text>
            {myRequests.map((req) => (
               <Card key={req.id} className="mb-4">
                 <View className="flex-row justify-between mb-2">
                   <Text className="text-lg font-bold text-accent">{req.patientName}</Text>
                   <Text className={`font-bold px-2 py-1 rounded text-xs ${
                     req.status === 'Approved' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                   }`}>
                     {req.status}
                   </Text>
                 </View>
                 <Text className="text-gray-500 mb-1">{req.hospital} • {req.date}</Text>
                 <Text className="text-primary font-bold">{req.units} Units of {req.bloodGroup}</Text>
               </Card>
            ))}
         </View>
      )}

    </ScrollView>
  );
}
