import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ToggleSwitch({ label, value, onValueChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#E0E0E0', true: '#FFCDD2' }}
        thumbColor={value ? '#C62828' : '#f4f3f4'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  label: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '500',
    flex: 1,
    marginRight: 12,
  },
});
