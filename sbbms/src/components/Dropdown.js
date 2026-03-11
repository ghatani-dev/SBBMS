import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput, StyleSheet } from 'react-native';

export default function Dropdown({ label, data = [], selectedValue, onSelect, placeholder = 'Select an option' }) {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = data.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedLabel = data.find(d => d.value === selectedValue)?.label || '';

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <TouchableOpacity style={styles.trigger} onPress={() => setVisible(true)}>
        <Text style={selectedValue ? styles.selectedText : styles.placeholderText}>
          {selectedLabel || placeholder}
        </Text>
        <Text style={styles.arrow}>▾</Text>
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="slide" onRequestClose={() => setVisible(false)}>
        <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)} activeOpacity={1}>
          <View style={styles.sheet}>
            {label ? <Text style={styles.sheetTitle}>{label}</Text> : null}
            <TextInput
              style={styles.search}
              placeholder="Search..."
              value={search}
              onChangeText={setSearch}
              placeholderTextColor="#9E9E9E"
            />
            <FlatList
              data={filtered}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.option, item.value === selectedValue && styles.selectedOption]}
                  onPress={() => { onSelect(item.value); setVisible(false); setSearch(''); }}
                >
                  <Text style={[styles.optionText, item.value === selectedValue && styles.selectedOptionText]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '500', color: '#333333', marginBottom: 4 },
  trigger: {
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E0E0E0',
    padding: 12, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  selectedText: { fontSize: 16, color: '#333333', flex: 1 },
  placeholderText: { fontSize: 16, color: '#9E9E9E', flex: 1 },
  arrow: { fontSize: 18, color: '#9E9E9E' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
  sheet: {
    backgroundColor: '#FFFFFF', borderTopLeftRadius: 20, borderTopRightRadius: 20,
    padding: 16, maxHeight: '60%',
  },
  sheetTitle: { fontSize: 18, fontWeight: 'bold', color: '#333333', marginBottom: 12, textAlign: 'center' },
  search: {
    backgroundColor: '#F5F5F5', borderRadius: 8, padding: 10, fontSize: 15,
    color: '#333333', marginBottom: 8, borderWidth: 1, borderColor: '#E0E0E0',
  },
  option: { paddingVertical: 14, paddingHorizontal: 8, borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
  selectedOption: { backgroundColor: '#FFF0F0' },
  optionText: { fontSize: 16, color: '#333333' },
  selectedOptionText: { color: '#C62828', fontWeight: 'bold' },
});
