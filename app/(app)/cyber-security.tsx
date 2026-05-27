import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, View, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

const { width: screenWidth } = Dimensions.get('window');

export default function CyberSecurityScreen() {
  const router = useRouter();
  const iconColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'backgroundOffset');
  const cardBg = useThemeColor({}, 'card');
  const borderBg = useThemeColor({}, 'border');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      Alert.alert('Incomplete Form', 'Please fill in all the details to request a consultation.');
      return;
    }
    Alert.alert(
      'Request Submitted',
      `Thank you ${name}. Our healthcare digital security specialists will reach out to you within 24 hours.`,
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  const coverages = [
    {
      title: 'Patient Data Protection',
      description: 'Covers major liability claims arising from electronic health record (EHR) data breaches, leaks, or hacking incidents.',
      icon: 'lock-closed' as const,
    },
    {
      title: 'Ransomware Extortion Cover',
      description: 'Provides critical financial coverage for system locking threats, cyber-extortion, and data recovery services.',
      icon: 'shield-half' as const,
    },
    {
      title: 'Business Interruption Support',
      description: 'Offsets operating losses and compensates for clinic/hospital downtime caused by active cyber attacks.',
      icon: 'time' as const,
    },
    {
      title: 'HIPAA & Compliance Assurances',
      description: 'Helps cover standard defense costs, forensic audits, and regulatory fines resulting from security violations.',
      icon: 'document-text' as const,
    },
  ];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'} />
      <ThemedView style={[styles.container, { backgroundColor }]}>
        
        {/* Header */}
        <View style={[styles.header, { backgroundColor: useThemeColor({}, 'background'), borderBottomColor: borderBg }]}>
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton} 
            accessibilityLabel="Go back"
          >
            <Ionicons name="arrow-back" size={24} color={iconColor} />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <ThemedText style={styles.headerTitle}>Cyber Security Cover</ThemedText>
            <ThemedText style={styles.headerSubtitle}>Digital Risk Protection</ThemedText>
          </View>
          <View style={styles.placeholder} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Banner */}
          <View style={styles.banner}>
            <View style={styles.bannerIconContainer}>
              <Ionicons name="shield-checkmark" size={42} color="#ffffff" />
            </View>
            <ThemedText style={styles.bannerTitle}>Enterprise-Grade Cyber Insurance</ThemedText>
            <ThemedText style={styles.bannerDesc}>
              Protecting hospital management networks, doctor consultation portals, and confidential patient records with robust compliance-ready coverage.
            </ThemedText>
          </View>

          {/* Coverages Grid */}
          <ThemedText style={styles.sectionTitle}>What is Covered?</ThemedText>
          <View style={styles.gridContainer}>
            {coverages.map((item, index) => (
              <ThemedView 
                key={index} 
                style={[styles.itemCard, { backgroundColor: cardBg, borderColor: borderBg }]}
              >
                <View style={styles.itemHeader}>
                  <View style={styles.itemIconWrapper}>
                    <Ionicons name={item.icon} size={20} color="#4f46e5" />
                  </View>
                  <ThemedText style={styles.itemTitle}>{item.title}</ThemedText>
                </View>
                <ThemedText 
                  style={styles.itemDesc}
                  lightColor={Colors.light.secondaryText}
                  darkColor={Colors.dark.secondaryText}
                >
                  {item.description}
                </ThemedText>
              </ThemedView>
            ))}
          </View>

          {/* Quick Inquiry Form */}
          <ThemedView style={[styles.formCard, { backgroundColor: cardBg, borderColor: borderBg }]}>
            <ThemedText style={styles.formTitle}>Request a Custom Quote</ThemedText>
            <ThemedText 
              style={styles.formSubtitle}
              lightColor={Colors.light.secondaryText}
              darkColor={Colors.dark.secondaryText}
            >
              Get a customized cyber security insurance proposal for your medical facility or private practice.
            </ThemedText>

            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>Full Name / Facility Representative</ThemedText>
              <TextInput
                style={[styles.input, { borderColor: borderBg, color: iconColor }]}
                placeholder="Enter name"
                placeholderTextColor="#94a3b8"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>Corporate Email Address</ThemedText>
              <TextInput
                style={[styles.input, { borderColor: borderBg, color: iconColor }]}
                placeholder="Enter email"
                placeholderTextColor="#94a3b8"
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>Contact Number</ThemedText>
              <TextInput
                style={[styles.input, { borderColor: borderBg, color: iconColor }]}
                placeholder="Enter phone number"
                placeholderTextColor="#94a3b8"
                value={phone}
                keyboardType="phone-pad"
                onChangeText={setPhone}
              />
            </View>

            <TouchableOpacity 
              style={styles.submitBtn} 
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <ThemedText style={styles.submitBtnText}>Request Consultation</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1.5,
    ...Platform.select({
      ios: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 6,
      },
      android: {
        elevation: 2,
      },
      web: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 6,
      }
    }),
  },
  backButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(241, 245, 249, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 24 : 19,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 13 : 11,
    color: '#64748b',
    marginTop: 1.5,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
  placeholder: {
    width: 40,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 60,
  },
  banner: {
    backgroundColor: '#4f46e5',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginBottom: 25,
  },
  bannerIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  bannerDesc: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
    paddingLeft: 4,
  },
  gridContainer: {
    gap: 12,
    marginBottom: 30,
  },
  itemCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(79, 70, 229, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  itemDesc: {
    fontSize: 13,
    lineHeight: 18,
    paddingLeft: 48,
  },
  formCard: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  formSubtitle: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748b',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
  },
  submitBtn: {
    backgroundColor: '#4f46e5',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  submitBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});
