import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const TYPE_COLORS = {
  info: '#1565C0',
  success: '#2E7D32',
  warning: '#F57C00',
  error: '#C62828',
};

const TYPE_ICONS = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
};

export default function NotificationBanner({ message, type = 'info', visible, onClose }) {
  const translateY = useRef(new Animated.Value(-120)).current;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: visible ? 0 : -120,
      useNativeDriver: true,
      tension: 80,
      friction: 10,
    }).start();
  }, [visible]);

  if (!visible) return null;

  const bgColor = TYPE_COLORS[type] || '#C62828';

  return (
    <Animated.View style={[styles.container, { backgroundColor: bgColor, transform: [{ translateY }] }]}>
      <View style={styles.content}>
        <Text style={styles.icon}>{TYPE_ICONS[type]}</Text>
        <Text style={styles.message} numberOfLines={3}>{message}</Text>
      </View>
      <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    padding: 16,
    paddingTop: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 12,
  },
  icon: {
    fontSize: 20,
    color: '#FFFFFF',
    marginRight: 10,
  },
  message: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
  },
  closeBtn: {
    padding: 4,
  },
  closeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
