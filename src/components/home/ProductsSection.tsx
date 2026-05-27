import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export function ProductsSection() {
  const router = useRouter();

  const handleCyberPress = () => {
    router.push('/cyber-security');
  };

  const handlePathLabPress = () => {
    router.push('/path-lab');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Our Products</Text>
      <Text style={styles.sectionSubtitle}>
        Explore premium digital protection & diagnostic services.
      </Text>

      <View style={styles.optionsContainer}>
        {/* Cyber Security Insurance Card */}
        <TouchableOpacity 
          style={[styles.card, styles.cyberCard]} 
          onPress={handleCyberPress}
          activeOpacity={0.8}
        >
          <View style={styles.cardIconWrapper}>
            <Ionicons name="shield-checkmark-outline" size={30} color="#ffffff" />
          </View>
          <View style={styles.cardTextWrapper}>
            <Text style={styles.cardTitle}>Cyber Security Insurance</Text>
            <Text style={styles.cardSubtitle}>
              Enterprise-grade digital data & medical record protection cover
            </Text>
          </View>
        </TouchableOpacity>

        {/* Path Lab Test Card */}
        <TouchableOpacity 
          style={[styles.card, styles.labCard]} 
          onPress={handlePathLabPress}
          activeOpacity={0.8}
        >
          <View style={styles.cardIconWrapper}>
            <Ionicons name="flask-outline" size={30} color="#ffffff" />
          </View>
          <View style={styles.cardTextWrapper}>
            <Text style={styles.cardTitle}>Path Lab Test</Text>
            <Text style={styles.cardSubtitle}>
              Doorstep sample collection with fast, certified digital reports
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 6,
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
    paddingHorizontal: 12,
  },
  optionsContainer: {
    flexDirection: 'column',
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  cyberCard: {
    backgroundColor: '#4f46e5', // Royal Indigo
  },
  labCard: {
    backgroundColor: '#e11d48', // Medical Rose/Ruby
  },
  cardIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardTextWrapper: {
    flex: 1,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 13.5,
    marginTop: 4,
    lineHeight: 18,
  },
});
