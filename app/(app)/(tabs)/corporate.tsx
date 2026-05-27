import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import {
  FeaturesSection,
  RegistrationForm
} from '@/components/explore';
import { features } from '@/components/explore/data';
import { submitCorporateForm } from '@/services/corporateApi';

const Corporate = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const registrationFormY = useRef(0);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phoneNumber: '',
    employeeCount: '',
    industry: '',
    currentProvider: '',
    specificNeeds: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[6-9]\d{9}$/.test(phone);

  const handleSubmit = async () => {
    setError('');
    setIsSubmitting(true);
    setSubmitted(false);

    try {
      // Client-side validation
      if (!formData.companyName.trim()) throw new Error("Please enter your company name");
      if (!formData.contactPerson.trim()) throw new Error("Please enter contact person name");
      if (!validateEmail(formData.email)) throw new Error("Please enter a valid email address");
      if (!validatePhone(formData.phoneNumber)) throw new Error("Please enter a valid 10-digit mobile number");
      if (!formData.employeeCount) throw new Error("Please select employee count");

      // Use the real API service
      const result = await submitCorporateForm(formData);

      if (result.success) {
        setSubmitted(true);
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phoneNumber: '',
          employeeCount: '',
          industry: '',
          currentProvider: '',
          specificNeeds: ''
        });
      } else {
        throw new Error(result.message);
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCall = () => {
    Linking.openURL('tel:+918923894358');
  };

  const handleRegistrationPress = () => {
    // Scroll directly to the registration form section
    scrollViewRef.current?.scrollTo({ y: registrationFormY.current, animated: true });
  };

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Corporate</Text>
        <View style={styles.placeholder} />
      </View>
      
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
      >
        <ScrollView ref={scrollViewRef} style={styles.scrollView} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          {/* <HeroSection stats={heroStats} /> */}
          {/* <MarqueeSection reviews={reviews} /> */}
          <FeaturesSection features={features} onCallPress={handleCall} onRegistrationPress={handleRegistrationPress} />
          <View onLayout={(e) => { registrationFormY.current = e.nativeEvent.layout.y; }}>
            <RegistrationForm
              formData={formData}
              submitted={submitted}
              error={error}
              isSubmitting={isSubmitting}
              onFormDataChange={handleChange}
              onSubmit={handleSubmit}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  placeholder: {
    width: 40, // Same width as back button to center the title
  },
  scrollView: {
    flex: 1,
  },
});

export default Corporate;
