import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

export default function ModalDialog({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isDestructive = false,
}) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.message}>{message}</Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionBtn} onPress={onCancel}>
              <Text style={styles.cancelText}>{cancelText}</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.actionBtn} onPress={onConfirm}>
              <Text style={[styles.confirmText, isDestructive && styles.destructiveText]}>
                {confirmText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
  },
  dialog: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: '100%',
    maxWidth: 380,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#C62828',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    padding: 24,
  },
  message: {
    color: '#333333',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  actionBtn: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#E0E0E0',
  },
  cancelText: {
    color: '#9E9E9E',
    fontWeight: 'bold',
    fontSize: 16,
  },
  confirmText: {
    color: '#2E7D32',
    fontWeight: 'bold',
    fontSize: 16,
  },
  destructiveText: {
    color: '#C62828',
  },
});
