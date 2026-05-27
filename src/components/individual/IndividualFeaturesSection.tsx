import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
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
      {/* CTA Gradient Card — same pattern as corporate */}
      <LinearGradient
        colors={['#0d9488', '#14b8a6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.ctaCard}
      >
        <View style={styles.ctaContent}>
          <Text style={styles.ctaTitle}>
            Your Health, Our Priority
          </Text>
          <Text style={styles.ctaSubtitle}>
            From consultations to diagnostics — get personalised care built around your needs, not a template.
          </Text>
          <View style={styles.ctaButtons}>
            <TouchableOpacity style={styles.primaryButton} onPress={onRegistrationPress}>
              <Text style={styles.primaryButtonText}>Fill Request Form</Text>
              <Ionicons name="arrow-forward" size={18} color="#0d9488" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={onCallPress}>
              <Ionicons name="call" size={18} color="#ffffff" />
              <Text style={styles.secondaryButtonText}>Call: +91-8923894358</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>What we offer</Text>
      <Text style={styles.sectionDesc}>
        Whether it's a routine checkup or specialist care, we keep it simple, accessible, and human.
      </Text>

      {/* Service Cards — horizontal icon-left layout */}
      <View style={styles.servicesList}>
        <View style={styles.serviceCard}>
          <View style={[styles.serviceIconWrap, { backgroundColor: '#eff6ff' }]}>  
            <Ionicons name="medkit" size={22} color="#3b82f6" />
          </View>
          <View style={styles.serviceTextCol}>
            <Text style={styles.serviceTitle}>General Consultation</Text>
            <Text style={styles.serviceDesc}>Talk to a doctor about any health concern — no referrals needed.</Text>
          </View>
        </View>

        <View style={styles.serviceCard}>
          <View style={[styles.serviceIconWrap, { backgroundColor: '#fef3c7' }]}>  
            <Ionicons name="pulse" size={22} color="#d97706" />
          </View>
          <View style={styles.serviceTextCol}>
            <Text style={styles.serviceTitle}>Health Screening</Text>
            <Text style={styles.serviceDesc}>Preventive check-ups and full-body diagnostics at your doorstep.</Text>
          </View>
        </View>

        <View style={styles.serviceCard}>
          <View style={[styles.serviceIconWrap, { backgroundColor: '#f0fdf4' }]}>  
            <Ionicons name="call" size={22} color="#16a34a" />
          </View>
          <View style={styles.serviceTextCol}>
            <Text style={styles.serviceTitle}>Direct Doctor Access</Text>
            <Text style={styles.serviceDesc}>Skip waiting rooms — connect with specialists over a quick call.</Text>
          </View>
        </View>

        <View style={styles.serviceCard}>
          <View style={[styles.serviceIconWrap, { backgroundColor: '#fdf2f8' }]}>  
            <Ionicons name="heart" size={22} color="#db2777" />
          </View>
          <View style={styles.serviceTextCol}>
            <Text style={styles.serviceTitle}>Chronic Care Plans</Text>
            <Text style={styles.serviceDesc}>Long-term management for diabetes, hypertension, and more.</Text>
          </View>
        </View>
      </View>

      {/* Trust Points — compact inline */}
      <View style={styles.trustBar}>
        <View style={styles.trustChip}>
          <Ionicons name="shield-checkmark" size={14} color="#10b981" />
          <Text style={styles.trustText}>HIPAA Compliant</Text>
        </View>
        <View style={styles.trustChip}>
          <Ionicons name="time" size={14} color="#3b82f6" />
          <Text style={styles.trustText}>24/7 Support</Text>
        </View>
        <View style={styles.trustChip}>
          <Ionicons name="people" size={14} color="#8b5cf6" />
          <Text style={styles.trustText}>5K+ Patients</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
  },

  // ── CTA Gradient Card ──
  ctaCard: {
    borderRadius: 20,
    padding: 28,
    marginBottom: 32,
  },
  ctaContent: {
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: -0.2,
  },
  ctaSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 24,
    maxWidth: 300,
  },
  ctaButtons: {
    gap: 12,
    width: '100%',
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  primaryButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0d9488',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.5)',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },

  // ── Section Title ──
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  sectionDesc: {
    fontSize: 13.5,
    color: '#6b7280',
    lineHeight: 19,
    marginBottom: 20,
  },

  // ── Service Cards ──
  servicesList: {
    gap: 12,
    marginBottom: 24,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  serviceIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    marginTop: 2,
  },
  serviceTextCol: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 3,
  },
  serviceDesc: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 18,
  },

  // ── Trust Bar ──
  trustBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  trustChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  trustText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#475569',
    letterSpacing: 0.3,
  },
});

export default IndividualFeaturesSection;
