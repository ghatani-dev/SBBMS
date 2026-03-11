import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.base,
        styles[variant],
        disabled && styles.disabled,
      ]}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, styles[variant + 'Text']]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#C62828',
  },
  secondary: {
    backgroundColor: '#333333',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#C62828',
  },
  danger: {
    backgroundColor: '#C62828',
  },
  disabled: {
    opacity: 0.45,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: '#C62828',
  },
  dangerText: {
    color: '#FFFFFF',
  },
});
