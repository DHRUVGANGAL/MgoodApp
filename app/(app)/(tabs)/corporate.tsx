import React, { useRef, useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import {
  FeaturesSection,
  RegistrationForm
} from '@/components/explore';
import { features } from '@/components/explore/data';
import { submitCorporateForm } from '@/services/corporateApi';

const Corporate = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const registrationFormY = useRef(0);
  
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



  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
      >
        <ScrollView ref={scrollViewRef} style={styles.scrollView} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollContent}>
          {/* Page Header */}
          <View style={styles.pageHeader}>
            <Text style={styles.pageTitle}>Corporate</Text>
            <Text style={styles.pageSubtitle}>Tailored wellness plans for your organization</Text>
          </View>

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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 16,
    paddingBottom: 120,
  },
  pageHeader: {
    paddingHorizontal: 20,
    marginBottom: 8,
    paddingTop: 48,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.3,
  },
  pageSubtitle: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 4,
    fontWeight: '400',
  },
});

export default Corporate;
