import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {
  const router = useRouter();

  const handleIndividualPress = () => {
    router.push('/individual');
  };

  const handleCorporatePress = () => {
    router.push('/corporate');
  };
  
  const handleNotificationPress = () => {
    console.log('Notification icon pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {/* Header Row (for notification icon) */}
      <View style={styles.headerRow}>
        <View />
        <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPress}>
          <Ionicons name="notifications-outline" size={22} color="#1F2937" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>New Request</Text>
        <Text style={styles.subtitle}>Choose an option below to get started.</Text>
        
        <View style={styles.optionsContainer}>
          {/* Individual Request Card */}
          <TouchableOpacity style={[styles.card, styles.individualCard]} onPress={handleIndividualPress}>
            <View style={styles.cardIconWrapper}>
              <Ionicons name="person-outline" size={36} color="#ffffff" />
            </View>
            <View style={styles.cardTextWrapper}>
              <Text style={styles.cardTitle}>Individual Request</Text>
              <Text style={styles.cardSubtitle}>For personal health inquiries</Text>
            </View>
          </TouchableOpacity>

          {/* Corporate Request Card */}
          <TouchableOpacity style={[styles.card, styles.corporateCard]} onPress={handleCorporatePress}>
            <View style={styles.cardIconWrapper}>
              <Ionicons name="briefcase-outline" size={36} color="#ffffff" />
            </View>
            <View style={styles.cardTextWrapper}>
              <Text style={styles.cardTitle}>Corporate Request</Text>
              <Text style={styles.cardSubtitle}>For company health plans</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  headerRow: {
    paddingHorizontal: 24,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationButton: {
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  optionsContainer: {
    flexDirection: 'column',
    gap: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 28,
    backgroundColor: '#3B82F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },
  individualCard: {
    backgroundColor: '#3B82F6', // blue
  },
  corporateCard: {
    backgroundColor: '#14B8A6', // teal
  },
  cardIconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  cardTextWrapper: {
    flex: 1,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
  },
  cardSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    marginTop: 6,
  },
});

export default HomePage;
