import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { AuthContext } from '../../store/AuthContext';
import Card from '../../components/Card';
import Button from '../../components/Button';

export default function RoleSelectionScreen() {
  const { login } = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>How would you like to use SBBMS?</Text>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>🩸</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Donate Blood</Text>
            <Text style={styles.cardSubtitle}>I want to be a donor and save lives</Text>
          </View>
        </View>
        <Button title="Continue as Donor" onPress={() => login('donor')} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>🏥</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Need Blood</Text>
            <Text style={styles.cardSubtitle}>I am a patient or attendant</Text>
          </View>
        </View>
        <Button title="Continue as Receiver" onPress={() => login('receiver')} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>⚙️</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Blood Bank Staff</Text>
            <Text style={styles.cardSubtitle}>Manage inventory and requests</Text>
          </View>
        </View>
        <Button title="Login as Admin" variant="outline" onPress={() => login('admin')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#F5F5F5', padding: 20, justifyContent: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#333333', textAlign: 'center', marginBottom: 24 },
  card: {
    backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  iconBox: { backgroundColor: '#FFF0F0', padding: 12, borderRadius: 50, marginRight: 16 },
  iconText: { fontSize: 28 },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333333' },
  cardSubtitle: { fontSize: 14, color: '#9E9E9E', marginTop: 2 },
});
