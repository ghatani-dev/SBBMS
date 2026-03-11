import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  error,
}) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, error ? styles.inputError : styles.inputNormal]}
        placeholderTextColor="#9E9E9E"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333333',
  },
  inputNormal: {
    borderColor: '#E0E0E0',
  },
  inputError: {
    borderColor: '#C62828',
  },
  errorText: {
    fontSize: 12,
    color: '#C62828',
    marginTop: 4,
  },
});
