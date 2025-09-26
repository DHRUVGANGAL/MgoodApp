import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IndividualFeaturesSectionProps {
  onCallPress: () => void;
  onRegistrationPress: () => void;
}

const IndividualFeaturesSection: React.FC<IndividualFeaturesSectionProps> = ({
  onCallPress,
  onRegistrationPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Personal Healthcare Services</Text>
        <Text style={styles.heroSubtitle}>Get personalized healthcare solutions tailored to your needs</Text>
      </View>

      {/* Features Grid */}
      <View style={styles.featuresGrid}>
        <View style={styles.featureCard}>
          <View style={styles.featureIconContainer}>
            <Ionicons name="medical" size={32} color="#3B82F6" />
          </View>
          <Text style={styles.featureTitle}>24/7 Medical Support</Text>
          <Text style={styles.featureDescription}>Round-the-clock healthcare assistance and emergency support</Text>
        </View>
        
        <View style={styles.featureCard}>
          <View style={styles.featureIconContainer}>
            <Ionicons name="call" size={32} color="#3B82F6" />
          </View>
          <Text style={styles.featureTitle}>Direct Consultation</Text>
          <Text style={styles.featureDescription}>Connect directly with qualified healthcare professionals</Text>
        </View>
      </View>

      {/* Call to Action Section */}
      <View style={styles.ctaSection}>
        <TouchableOpacity style={styles.callButton} onPress={onCallPress}>
          <Ionicons name="call" size={20} color="white" />
          <Text style={styles.callButtonText}>Call Now: +91 8923894358</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.registerButton} onPress={onRegistrationPress}>
          <Ionicons name="document-text" size={20} color="white" />
          <Text style={styles.registerButtonText}>Register Your Request</Text>
        </TouchableOpacity>
      </View>

      {/* Benefits Section */}
      <View style={styles.benefitsSection}>
        <Text style={styles.benefitsTitle}>Why Choose Our Healthcare Services?</Text>
        <View style={styles.benefitsList}>
          <View style={styles.benefitItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.benefitText}>Expert medical professionals</Text>
          </View>
          <View style={styles.benefitItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.benefitText}>Quick response time</Text>
          </View>
          <View style={styles.benefitItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.benefitText}>Comprehensive healthcare coverage</Text>
          </View>
          <View style={styles.benefitItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.benefitText}>Affordable pricing options</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 32,
    paddingVertical: 24,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  featuresGrid: {
    flexDirection: 'column',
    gap: 16,
    marginBottom: 32,
  },
  featureCard: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featureIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EBF4FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  ctaSection: {
    gap: 12,
    marginBottom: 32,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  callButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  benefitsSection: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  benefitsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  benefitsList: {
    gap: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  benefitText: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
  },
});

export default IndividualFeaturesSection;
