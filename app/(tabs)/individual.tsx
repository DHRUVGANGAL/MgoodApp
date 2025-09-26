import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IndividualFeaturesSection from '../../components/individual/IndividualFeaturesSection';
import IndividualRegistrationForm from '../../components/individual/IndividualRegistrationForm';
import { IndividualFormData, submitIndividualForm } from '../../src/services/individualApi';

const Individual = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const registrationFormY = useRef(0);
  const router = useRouter();
  
  const [formData, setFormData] = useState<IndividualFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    serviceType: '',
    requestDetails: '',
    preferredContactMethod: '',
    urgencyLevel: '',
    medicalHistory: ''
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
      if (!formData.fullName.trim()) throw new Error("Please enter your full name");
      if (!validateEmail(formData.email)) throw new Error("Please enter a valid email address");
      if (!validatePhone(formData.phoneNumber)) throw new Error("Please enter a valid 10-digit mobile number");
      if (!formData.serviceType) throw new Error("Please select a service type");
      if (!formData.requestDetails.trim()) throw new Error("Please provide request details");

      // Use the API service
      const result = await submitIndividualForm(formData);

      if (result.success) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          dateOfBirth: '',
          gender: '',
          serviceType: '',
          requestDetails: '',
          preferredContactMethod: '',
          urgencyLevel: '',
          medicalHistory: ''
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
    scrollViewRef.current?.scrollTo({ y: registrationFormY.current, animated: true });
  };

  const handleBackPress = () => {
    router.push('/');
  };

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Individual Request</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView ref={scrollViewRef} style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <IndividualFeaturesSection 
          onCallPress={handleCall}
          onRegistrationPress={handleRegistrationPress}
        />
        
        <View onLayout={(e) => { registrationFormY.current = e.nativeEvent.layout.y; }}>
          <IndividualRegistrationForm
            formData={formData}
            submitted={submitted}
            error={error}
            isSubmitting={isSubmitting}
            onFormDataChange={handleChange}
            onSubmit={handleSubmit}
          />
        </View>
      </ScrollView>
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
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
});

export default Individual;
