// VaultScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

// This is your Vault screen skeleton
export default function VaultScreen() {
  const router = useRouter();























  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vault</Text>
      {/* Future content will go here */}
    </View>
  );
}

















const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
