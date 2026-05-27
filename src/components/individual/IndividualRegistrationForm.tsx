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
    <View style={styles.formWrapper}>
      {/* Form Header */}
      <View style={styles.formHeader}>
        <View style={styles.formHeaderIcon}>
          <Ionicons name="document-text-outline" size={20} color="#0d9488" />
        </View>
        <View>
          <Text style={styles.formTitle}>Request Form</Text>
          <Text style={styles.formSubtitle}>Takes about 2 minutes to fill</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {error ? (
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle" size={16} color="#dc2626" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      {submitted ? (
        <View style={styles.successContainer}>
          <View style={styles.successIconWrap}>
            <Ionicons name="checkmark-circle" size={48} color="#10B981" />
          </View>
          <Text style={styles.successTitle}>Request Submitted</Text>
          <Text style={styles.successMessage}>We'll reach out to you within 24 hours.</Text>
        </View>
      ) : (
        <>
          {/* ── Personal Info Section ── */}
          <Text style={styles.sectionLabel}>Personal Information</Text>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Full Name <Text style={styles.required}>*</Text></Text>
            <View style={styles.inputRow}>
              <Ionicons name="person-outline" size={18} color="#94a3b8" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="e.g. Alex Morgan"
                placeholderTextColor="#9ca3af"
                value={formData.fullName}
                onChangeText={(text) => onFormDataChange('fullName', text)}
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email <Text style={styles.required}>*</Text></Text>
            <View style={styles.inputRow}>
              <Ionicons name="mail-outline" size={18} color="#94a3b8" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="you@example.com"
                placeholderTextColor="#9ca3af"
                value={formData.email}
                onChangeText={(text) => onFormDataChange('email', text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Phone <Text style={styles.required}>*</Text></Text>
            <View style={styles.inputRow}>
              <Ionicons name="call-outline" size={18} color="#94a3b8" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="+91 9876543210"
                placeholderTextColor="#9ca3af"
                value={formData.phoneNumber}
                onChangeText={(text) => onFormDataChange('phoneNumber', text)}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <View style={styles.inputRow}>
              <Ionicons name="calendar-outline" size={18} color="#94a3b8" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="#9ca3af"
                value={formData.dateOfBirth}
                onChangeText={(text) => onFormDataChange('dateOfBirth', text)}
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Gender</Text>
            <DropdownSelect
              options={genderOptions}
              value={formData.gender}
              placeholder="Select gender"
              onValueChange={(value) => onFormDataChange('gender', value)}
            />
          </View>

          {/* ── Service Details Section ── */}
          <View style={styles.sectionDivider} />
          <Text style={styles.sectionLabel}>Service Details</Text>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Service Type <Text style={styles.required}>*</Text></Text>
            <DropdownSelect
              options={serviceTypeOptions}
              value={formData.serviceType}
              placeholder="What do you need help with?"
              onValueChange={(value) => onFormDataChange('serviceType', value)}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Preferred Contact</Text>
            <DropdownSelect
              options={contactMethodOptions}
              value={formData.preferredContactMethod}
              placeholder="How should we reach you?"
              onValueChange={(value) => onFormDataChange('preferredContactMethod', value)}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Urgency</Text>
            <DropdownSelect
              options={urgencyOptions}
              value={formData.urgencyLevel}
              placeholder="How urgent is this?"
              onValueChange={(value) => onFormDataChange('urgencyLevel', value)}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Describe your needs <Text style={styles.required}>*</Text></Text>
            <View style={styles.textAreaWrap}>
              <TextInput
                style={styles.textArea}
                placeholder="Tell us what's going on — symptoms, concerns, or questions…"
                placeholderTextColor="#9ca3af"
                value={formData.requestDetails}
                onChangeText={(text) => onFormDataChange('requestDetails', text)}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Medical History <Text style={styles.optional}>(optional)</Text></Text>
            <View style={styles.textAreaWrap}>
              <TextInput
                style={[styles.textArea, { minHeight: 80 }]}
                placeholder="Any existing conditions, allergies, or medications…"
                placeholderTextColor="#9ca3af"
                value={formData.medicalHistory}
                onChangeText={(text) => onFormDataChange('medicalHistory', text)}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* Submit */}
          <TouchableOpacity
            style={[styles.submitBtn, isSubmitting && styles.submitBtnDisabled]}
            onPress={onSubmit}
            disabled={isSubmitting}
            activeOpacity={0.85}
          >
            <Text style={styles.submitBtnText}>
              {isSubmitting ? 'Submitting…' : 'Submit Request'}
            </Text>
            {!isSubmitting && <Ionicons name="arrow-forward" size={18} color="#ffffff" />}
          </TouchableOpacity>

          <Text style={styles.disclaimer}>
            By submitting, you agree to our privacy policy. We never share your data.
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 140,
    borderRadius: 18,
    padding: 22,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },

  // ── Form Header ──
  formHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  formHeaderIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#f0fdfa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  formSubtitle: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginVertical: 18,
  },

  // ── Section Labels ──
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#6b7280',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 14,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginTop: 6,
    marginBottom: 18,
  },

  // ── Field Groups ──
  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  required: {
    color: '#ef4444',
    fontWeight: '400',
  },
  optional: {
    color: '#9ca3af',
    fontWeight: '400',
    fontSize: 12,
  },

  // ── Inputs ──
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1f2937',
  },
  textAreaWrap: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 14,
  },
  textArea: {
    fontSize: 15,
    color: '#1f2937',
    minHeight: 100,
    lineHeight: 21,
  },

  // ── Submit Button ──
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d9488',
    paddingVertical: 15,
    borderRadius: 12,
    gap: 8,
    marginTop: 8,
  },
  submitBtnDisabled: {
    backgroundColor: '#94a3b8',
  },
  submitBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  disclaimer: {
    fontSize: 11,
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 16,
  },

  // ── Feedback States ──
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#fecaca',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  errorText: {
    color: '#dc2626',
    fontSize: 13,
    flex: 1,
  },
  successContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  successIconWrap: {
    marginBottom: 12,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  successMessage: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});

export default IndividualRegistrationForm;
