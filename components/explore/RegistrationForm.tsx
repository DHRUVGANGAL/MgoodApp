import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from 'lucide-react-native';
import React from 'react';
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  employeeCount: string;
  industry: string;
  currentProvider: string;
  specificNeeds: string;
}

interface RegistrationFormProps {
  formData: FormData;
  submitted: boolean;
  error: string;
  isSubmitting: boolean;
  onFormDataChange: (name: string, value: string) => void;
  onSubmit: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formData,
  submitted,
  error,
  isSubmitting,
  onFormDataChange,
  onSubmit
}) => {
  return (
    <View style={styles.formSection}>
      <View style={styles.formContainer}>
        <View style={styles.formHeader}>
          <Text style={styles.formTitle}>Register Your Organization</Text>
          <Text style={styles.formSubtitle}>Take the first step. Our team will contact you within 24 hours.</Text>
        </View>
        
        <View style={styles.formCard}>
          <View style={styles.formContent}>
            {submitted && (
              <View style={styles.successMessage}>
                <CheckCircle size={24} color="#16a34a" />
                <View style={styles.successText}>
                  <Text style={styles.successTitle}>Registration Successful!</Text>
                  <Text style={styles.successSubtitle}>Our team will be in touch shortly.</Text>
                </View>
              </View>
            )}
            
            {error && (
              <View style={styles.errorMessage}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}
            
            <View style={styles.formRow}>
              <View style={styles.formField}>
                <Text style={styles.fieldLabel}>Company Name *</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.companyName}
                  onChangeText={(value) => onFormDataChange('companyName', value)}
                  placeholder="Your company name"
                  placeholderTextColor="#6B7280"
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.fieldLabel}>Contact Person *</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.contactPerson}
                  onChangeText={(value) => onFormDataChange('contactPerson', value)}
                  placeholder="Your full name"
                  placeholderTextColor="#6B7280"
                />
              </View>
            </View>
            
            <View style={styles.formRow}>
              <View style={styles.formField}>
                <Text style={styles.fieldLabel}>Business Email *</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.email}
                  onChangeText={(value) => onFormDataChange('email', value)}
                  placeholder="company@domain.com"
                  placeholderTextColor="#6B7280"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.fieldLabel}>Phone Number *</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.phoneNumber}
                  onChangeText={(value) => onFormDataChange('phoneNumber', value)}
                  placeholder="10-digit mobile number"
                  placeholderTextColor="#6B7280"
                  keyboardType="phone-pad"
                  maxLength={10}
                />
              </View>
            </View>
            
            <View style={styles.formRow}>
              <View style={styles.formField}>
                <Text style={styles.fieldLabel}>Employee Count *</Text>
                <View style={styles.pickerContainer}>
                  <TextInput
                    style={styles.textInput}
                    value={formData.employeeCount}
                    onChangeText={(value) => onFormDataChange('employeeCount', value)}
                    placeholder="Select count"
                    placeholderTextColor="#6B7280"
                    editable={false}
                    onPressIn={() => {
                      Alert.alert(
                        'Select Employee Count',
                        '',
                        [
                          { text: '1-50', onPress: () => onFormDataChange('employeeCount', '1-50') },
                          { text: '51-200', onPress: () => onFormDataChange('employeeCount', '51-200') },
                          { text: '201-500', onPress: () => onFormDataChange('employeeCount', '201-500') },
                          { text: '501-1000', onPress: () => onFormDataChange('employeeCount', '501-1000') },
                          { text: '1000+', onPress: () => onFormDataChange('employeeCount', '1000+') },
                          { text: 'Cancel', style: 'cancel' }
                        ]
                      );
                    }}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text style={styles.fieldLabel}>Industry</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.industry}
                  onChangeText={(value) => onFormDataChange('industry', value)}
                  placeholder="e.g., Technology"
                  placeholderTextColor="#6B7280"
                />
              </View>
            </View>
            
            <TouchableOpacity 
              style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
              onPress={onSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="small" color="white" />
                  <Text style={styles.submitButtonText}>Processing...</Text>
                </View>
              ) : (
                <View style={styles.submitButtonContent}>
                  <Text style={styles.submitButtonText}>Register Organization</Text>
                  <ArrowRight size={20} color="white" />
                </View>
              )}
            </TouchableOpacity>
          </View>
          
          <LinearGradient
            colors={['#2563eb', '#7c3aed']}
            style={styles.formSidebar}
          >
            <View style={styles.sidebarContent}>
              <Text style={styles.sidebarTitle}>Get in Touch</Text>
              <Text style={styles.sidebarSubtitle}>
                Our experts are standing by to help you create a customized MGood Program for your team.
              </Text>
              
              <View style={styles.contactInfo}>
                <View style={styles.contactItem}>
                  <Phone size={24} color="white" />
                  <View style={styles.contactText}>
                    <Text style={styles.contactLabel}>Call Us</Text>
                    <Text style={styles.contactValue}>+91-8923894358</Text>
                  </View>
                </View>
                
                <View style={styles.contactItem}>
                  <Mail size={24} color="white" />
                  <View style={styles.contactText}>
                    <Text style={styles.contactLabel}>Email Us</Text>
                    <Text style={styles.contactValue}>info@mgood.org</Text>
                  </View>
                </View>
                
                <View style={styles.contactItem}>
                  <MapPin size={24} color="white" />
                  <View style={styles.contactText}>
                    <Text style={styles.contactLabel}>Visit Us</Text>
                    <Text style={styles.contactValue}>73/71 Chagan Pura, Mathura</Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.partnersSection}>
                <Text style={styles.partnersTitle}>Our Trusted Partners</Text>
                <View style={styles.partnersList}>
                  <Text style={styles.partnerItem}>
                    <Text style={styles.partnerLabel}>Doctors:</Text> MGood Super Speciality Network
                  </Text>
                  <Text style={styles.partnerItem}>
                    <Text style={styles.partnerLabel}>Pharmacy:</Text> AVA Pharma & Safe Meds
                  </Text>
                  <Text style={styles.partnerItem}>
                    <Text style={styles.partnerLabel}>Pathology:</Text> Thyrocare / Max / Sarvodaya
                  </Text>
                  <Text style={styles.partnerItem}>
                    <Text style={styles.partnerLabel}>MIS Analysis:</Text> In-House Team of Experts
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formSection: {
    paddingVertical: 80,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  formContainer: {
    maxWidth: width - 40,
    alignSelf: 'center',
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: 48,
  },
  formTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
  formSubtitle: {
    fontSize: 18,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 28,
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
    overflow: 'hidden',
    marginBottom: 120, // Increased bottom margin to avoid tab bar
  },
  formContent: {
    padding: 32,
    paddingBottom: 60, // Extra padding at bottom for button
  },
  successMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    borderWidth: 1,
    borderColor: '#bbf7d0',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  successText: {
    marginLeft: 12,
  },
  successTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#166534',
  },
  successSubtitle: {
    fontSize: 14,
    color: '#16a34a',
    marginTop: 4,
  },
  errorMessage: {
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#fecaca',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  errorText: {
    color: '#dc2626',
    fontSize: 14,
  },
  formRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  formField: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
    backgroundColor: 'white',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  submitButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButtonDisabled: {
    backgroundColor: '#93c5fd',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginRight: 8,
  },
  formSidebar: {
    padding: 32,
  },
  sidebarContent: {
    gap: 32,
  },
  sidebarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  sidebarSubtitle: {
    fontSize: 16,
    color: '#bfdbfe',
    lineHeight: 24,
  },
  contactInfo: {
    gap: 24,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    marginLeft: 16,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  contactValue: {
    fontSize: 14,
    color: '#bfdbfe',
    marginTop: 2,
  },
  partnersSection: {
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#3b82f6',
  },
  partnersTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  partnersList: {
    gap: 8,
  },
  partnerItem: {
    fontSize: 14,
    color: '#bfdbfe',
    lineHeight: 20,
  },
  partnerLabel: {
    fontWeight: '500',
    color: 'white',
  },
});
