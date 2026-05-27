import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropdownSelect from './DropdownSelect';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  serviceType: string;
  requestDetails: string;
  preferredContactMethod: string;
  urgencyLevel: string;
  medicalHistory: string;
}

interface IndividualRegistrationFormProps {
  formData: FormData;
  submitted: boolean;
  error: string;
  isSubmitting: boolean;
  onFormDataChange: (name: string, value: string) => void;
  onSubmit: () => void;
}

const IndividualRegistrationForm: React.FC<IndividualRegistrationFormProps> = ({
  formData,
  submitted,
  error,
  isSubmitting,
  onFormDataChange,
  onSubmit,
}) => {
  // Dropdown options
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
    { label: 'Prefer not to say', value: 'prefer_not_to_say' },
  ];

  const serviceTypeOptions = [
    { label: 'General Consultation', value: 'general_consultation' },
    { label: 'Specialist Referral', value: 'specialist_referral' },
    { label: 'Emergency Support', value: 'emergency_support' },
    { label: 'Health Screening', value: 'health_screening' },
    { label: 'Mental Health Support', value: 'mental_health' },
    { label: 'Chronic Care Management', value: 'chronic_care' },
    { label: 'Preventive Care', value: 'preventive_care' },
    { label: 'Telemedicine', value: 'telemedicine' },
  ];

  const contactMethodOptions = [
    { label: 'Phone Call', value: 'phone' },
    { label: 'Email', value: 'email' },
    { label: 'SMS', value: 'sms' },
    { label: 'WhatsApp', value: 'whatsapp' },
  ];

  const urgencyOptions = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
    { label: 'Emergency', value: 'emergency' },
  ];
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Individual Request Form</Text>
      
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      {submitted ? (
        <View style={styles.successContainer}>
          <Ionicons name="checkmark-circle" size={48} color="#10B981" />
          <Text style={styles.successTitle}>Request Submitted Successfully!</Text>
          <Text style={styles.successMessage}>We'll get back to you within 24 hours.</Text>
        </View>
      ) : (
        <>
          {/* Full Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="e.g. Alex Morgan"
                placeholderTextColor="#6B7280"
                value={formData.fullName}
                onChangeText={(text) => onFormDataChange('fullName', text)}
              />
            </View>
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="you@example.com"
                placeholderTextColor="#6B7280"
                value={formData.email}
                onChangeText={(text) => onFormDataChange('email', text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Phone Number */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="call-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="+91 9876543210"
                placeholderTextColor="#6B7280"
                value={formData.phoneNumber}
                onChangeText={(text) => onFormDataChange('phoneNumber', text)}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {/* Date of Birth */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Date of Birth</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="calendar-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="#6B7280"
                value={formData.dateOfBirth}
                onChangeText={(text) => onFormDataChange('dateOfBirth', text)}
              />
            </View>
          </View>

          {/* Gender */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Gender</Text>
            <DropdownSelect
              options={genderOptions}
              value={formData.gender}
              placeholder="Select gender"
              onValueChange={(value) => onFormDataChange('gender', value)}
            />
          </View>

          {/* Service Type */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Service Type</Text>
            <DropdownSelect
              options={serviceTypeOptions}
              value={formData.serviceType}
              placeholder="Select a service"
              onValueChange={(value) => onFormDataChange('serviceType', value)}
            />
          </View>

          {/* Preferred Contact Method */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Preferred Contact Method</Text>
            <DropdownSelect
              options={contactMethodOptions}
              value={formData.preferredContactMethod}
              placeholder="Phone, Email, or SMS"
              onValueChange={(value) => onFormDataChange('preferredContactMethod', value)}
            />
          </View>

          {/* Urgency Level */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Urgency Level</Text>
            <DropdownSelect
              options={urgencyOptions}
              value={formData.urgencyLevel}
              placeholder="Low, Medium, High, Emergency"
              onValueChange={(value) => onFormDataChange('urgencyLevel', value)}
            />
          </View>

          {/* Request Details */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Request Details</Text>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                placeholder="Please provide a brief description of your healthcare needs..."
                placeholderTextColor="#6B7280"
                value={formData.requestDetails}
                onChangeText={(text) => onFormDataChange('requestDetails', text)}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* Medical History */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Medical History (Optional)</Text>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                placeholder="Any relevant medical conditions or history..."
                placeholderTextColor="#6B7280"
                value={formData.medicalHistory}
                onChangeText={(text) => onFormDataChange('medicalHistory', text)}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity 
            style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]} 
            onPress={onSubmit}
            disabled={isSubmitting}
          >
            <Text style={styles.submitButtonText}>
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 24,
    marginBottom: 180, // Increased bottom margin to avoid tab bar
    padding: 24,
    paddingBottom: 40, // Extra padding at bottom for button
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 24,
    textAlign: 'center',
  },
  errorContainer: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECACA',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  errorText: {
    color: '#DC2626',
    fontSize: 14,
    textAlign: 'center',
  },
  successContainer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#10B981',
    marginTop: 16,
    marginBottom: 8,
  },
  successMessage: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  textAreaContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    padding: 16,
  },
  textArea: {
    fontSize: 16,
    color: '#1F2937',
    minHeight: 100,
  },
  submitButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default IndividualRegistrationForm;
