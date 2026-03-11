import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      setOtpSent(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Please enter a valid 10-digit phone number');
    }
  };

  const handleLogin = () => {
    if (otp === '1234') { // Mock OTP validation
      navigation.replace('RoleSelection');
    } else {
      setErrorMsg('Invalid OTP. Use 1234 for demo.');
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
        <Text className="text-3xl font-bold text-accent mb-2">Welcome to</Text>
        <Text className="text-4xl font-extrabold text-primary mb-12">SBBMS</Text>

        {!otpSent ? (
          <>
            <InputField
              label="Phone Number"
              placeholder="e.g. 9876543210"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              error={errorMsg}
            />
            <View className="mt-6">
              <Button title="Send OTP" onPress={handleSendOtp} />
            </View>
          </>
        ) : (
          <>
            <View className="mb-6 flex-row items-center justify-between">
              <Text className="text-accent text-lg">Sent to +91 {phoneNumber}</Text>
              <Text
                className="text-primary font-bold"
                onPress={() => setOtpSent(false)}
              >
                Change
              </Text>
            </View>
            <InputField
              label="Enter OTP"
              placeholder="1234 (Demo)"
              keyboardType="number-pad"
              value={otp}
              onChangeText={setOtp}
              error={error}
              secureTextEntry
            />
            <View className="mt-6">
              <Button title="Login" onPress={handleLogin} />
            </View>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
