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

export default function PathLabScreen() {
  const router = useRouter();
  const iconColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'backgroundOffset');
  const cardBg = useThemeColor({}, 'card');
  const borderBg = useThemeColor({}, 'border');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Full Body Health Checkup');

  const handleBooking = () => {
    if (!name || !phone || !address) {
      Alert.alert('Incomplete Details', 'Please fill in your name, contact, and address for sample collection.');
      return;
    }
    Alert.alert(
      'Lab Test Booked',
      `Thank you ${name}. A certified phlebotomist will arrive at your address to collect the samples. Details sent to your phone.`,
      [{ text: 'Great', onPress: () => router.back() }]
    );
  };

  const packages = [
    {
      title: 'Full Body Health Checkup',
      parameters: '62 Parameters Checked',
      price: '₹1,499',
      tests: 'CBC, Liver Profile, Kidney Function, Thyroid Profile, Cholesterol, Blood Sugar.',
    },
    {
      title: 'Diabetes Screening Package',
      parameters: '4 Key Parameters Checked',
      price: '₹499',
      tests: 'HbA1c (Glycated Haemoglobin), Fasting Blood Glucose, Average Blood Glucose.',
    },
    {
      title: 'Thyroid Function Test',
      parameters: '3 Hormones Tested',
      price: '₹399',
      tests: 'Total Triiodothyronine (T3), Total Thyroxine (T4), Thyroid Stimulating Hormone (TSH).',
    },
    {
      title: 'Vitamin Deficiency Assays',
      parameters: '2 Vital Vitamins Tested',
      price: '₹799',
      tests: 'Vitamin D (25-Hydroxy), Vitamin B12 (Active Cyanocobalamin).',
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
            <ThemedText style={styles.headerTitle}>Path Lab Diagnostics</ThemedText>
            <ThemedText style={styles.headerSubtitle}>Certified Lab Testing</ThemedText>
          </View>
          <View style={styles.placeholder} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Banner */}
          <View style={styles.banner}>
            <View style={styles.bannerIconContainer}>
              <Ionicons name="flask" size={42} color="#ffffff" />
            </View>
            <ThemedText style={styles.bannerTitle}>Accurate Doorstep Path Lab Tests</ThemedText>
            <ThemedText style={styles.bannerDesc}>
              Certified phlebotomists collecting blood/urine samples in sterile environments. 100% accurate, NABL-accredited digital reports delivered directly to your app.
            </ThemedText>
          </View>

          {/* Test Packages */}
          <ThemedText style={styles.sectionTitle}>Select Diagnostic Package</ThemedText>
          <View style={styles.listContainer}>
            {packages.map((pkg, index) => {
              const isSelected = selectedPackage === pkg.title;
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.9}
                  onPress={() => setSelectedPackage(pkg.title)}
                >
                  <ThemedView 
                    style={[
                      styles.pkgCard, 
                      { backgroundColor: cardBg, borderColor: isSelected ? '#e11d48' : borderBg }
                    ]}
                  >
                    <View style={styles.pkgHeader}>
                      <View>
                        <ThemedText style={styles.pkgTitle}>{pkg.title}</ThemedText>
                        <ThemedText style={styles.pkgParams}>{pkg.parameters}</ThemedText>
                      </View>
                      <ThemedText style={styles.pkgPrice}>{pkg.price}</ThemedText>
                    </View>
                    <ThemedText 
                      style={styles.pkgTests}
                      lightColor={Colors.light.secondaryText}
                      darkColor={Colors.dark.secondaryText}
                    >
                      Includes: {pkg.tests}
                    </ThemedText>
                    
                    <View style={styles.selectionRow}>
                      <View style={[styles.radio, { borderColor: isSelected ? '#e11d48' : '#cbd5e1' }]}>
                        {isSelected && <View style={styles.radioActive} />}
                      </View>
                      <ThemedText style={[styles.selectText, { color: isSelected ? '#e11d48' : '#64748b' }]}>
                        {isSelected ? 'Selected' : 'Tap to Select'}
                      </ThemedText>
                    </View>
                  </ThemedView>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Doorstep Phlebotomy Guarantee Info */}
          <View style={styles.guaranteeBox}>
            <Ionicons name="shield-checkmark" size={24} color="#059669" style={styles.guaranteeIcon} />
            <View style={styles.guaranteeTextContainer}>
              <ThemedText style={styles.guaranteeTitle}>Sterile & Certified Guarantee</ThemedText>
              <ThemedText style={styles.guaranteeDesc}>
                Our partners are NABL accredited. All sample collection needles are single-use, opened in front of you, and transported in regulated cold-chain storage.
              </ThemedText>
            </View>
          </View>

          {/* Appointment Form */}
          <ThemedView style={[styles.formCard, { backgroundColor: cardBg, borderColor: borderBg }]}>
            <ThemedText style={styles.formTitle}>Schedule Home Sample Collection</ThemedText>
            <ThemedText 
              style={styles.formSubtitle}
              lightColor={Colors.light.secondaryText}
              darkColor={Colors.dark.secondaryText}
            >
              Fill out your details below and a certified executive will visit you at the scheduled time.
            </ThemedText>

            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>{"Patient's Full Name"}</ThemedText>
              <TextInput
                style={[styles.input, { borderColor: borderBg, color: iconColor }]}
                placeholder="Enter patient's name"
                placeholderTextColor="#94a3b8"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>Mobile Number</ThemedText>
              <TextInput
                style={[styles.input, { borderColor: borderBg, color: iconColor }]}
                placeholder="Enter 10-digit number"
                placeholderTextColor="#94a3b8"
                value={phone}
                keyboardType="phone-pad"
                onChangeText={setPhone}
              />
            </View>

            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>Sample Collection Address</ThemedText>
              <TextInput
                style={[styles.input, styles.textArea, { borderColor: borderBg, color: iconColor }]}
                placeholder="Flat/House number, building name, locality, pincode"
                placeholderTextColor="#94a3b8"
                value={address}
                multiline
                numberOfLines={3}
                onChangeText={setAddress}
              />
            </View>

            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>Selected Test Package</ThemedText>
              <View style={[styles.disabledInput, { borderColor: borderBg }]}>
                <ThemedText style={styles.disabledInputText}>{selectedPackage}</ThemedText>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.submitBtn} 
              onPress={handleBooking}
              activeOpacity={0.8}
            >
              <ThemedText style={styles.submitBtnText}>Confirm Doorstep Collection</ThemedText>
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
    backgroundColor: '#e11d48',
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
  listContainer: {
    gap: 14,
    marginBottom: 25,
  },
  pkgCard: {
    borderWidth: 1.5,
    borderRadius: 18,
    padding: 16,
  },
  pkgHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  pkgTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  pkgParams: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '700',
    marginTop: 2,
  },
  pkgPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#e11d48',
  },
  pkgTests: {
    fontSize: 12.5,
    lineHeight: 18,
    marginBottom: 12,
  },
  selectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 10,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e11d48',
  },
  selectText: {
    fontSize: 12,
    fontWeight: '700',
  },
  guaranteeBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(16, 185, 129, 0.06)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 30,
  },
  guaranteeIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  guaranteeTextContainer: {
    flex: 1,
  },
  guaranteeTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#065f46',
    marginBottom: 4,
  },
  guaranteeDesc: {
    fontSize: 12,
    lineHeight: 16,
    color: '#065f46',
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
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  disabledInput: {
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#f8fafc',
  },
  disabledInputText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '600',
  },
  submitBtn: {
    backgroundColor: '#e11d48',
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
