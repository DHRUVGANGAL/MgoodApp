import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight, Phone } from 'lucide-react-native';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FeatureCard } from './FeatureCard';

const { width } = Dimensions.get('window');

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
  onCallPress: () => void;
  onRegistrationPress: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features, onCallPress, onRegistrationPress }) => {
  return (
    <View style={styles.featuresSection}>
      <LinearGradient
        colors={['#2563eb', '#8b5cf6']}
        style={styles.ctaCard}
      >
        <View style={styles.ctaContent}>
          <Text style={styles.ctaTitle}>
            Ready to Transform Your Employee Healthcare?
          </Text>
          <Text style={styles.ctaSubtitle}>
            Join hundreds of companies that have already revolutionized their employee wellness programs with MGood.
          </Text>
          <View style={styles.ctaButtons}>
            <TouchableOpacity style={styles.primaryButton} onPress={onRegistrationPress}>
              <Text style={styles.primaryButtonText}>Start Registration</Text>
              <ArrowRight size={20} color="#2563eb" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={onCallPress}>
              <Phone size={20} color="white" />
              <Text style={styles.secondaryButtonText}>Call: +91-8923894358</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.sectionHeader}>
        <Text style={styles.featuresTitle}>
          Healthy Employees, Happy Organization
        </Text>
        <Text style={styles.featuresSubtitle}>
          At MGood, we go beyond traditional corporate wellness. Our integrated approach combines health optimization, employee engagement, wellness benefits and strategic cost management to ensure your workforce thrives — physically, mentally, and financially. Together, we create a long-term, mutually beneficial model that reduces claims, controls premiums, and enhances overall organizational well-being
        </Text>
      </View>

      <View style={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  featuresSection: {
    paddingTop: 8,
    paddingBottom: 32,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: 64,
  },
  featuresTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
  featuresSubtitle: {
    fontSize: 18,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: width - 80,
  },
  featuresGrid: {
    gap: 32,
  },
  ctaCard: {
    borderRadius: 24,
    padding: 32,
    marginBottom: 64,
  },
  ctaContent: {
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaSubtitle: {
    fontSize: 18,
    color: '#bfdbfe',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 28,
  },
  ctaButtons: {
    gap: 16,
    width: '100%',
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2563eb',
    marginRight: 8,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginLeft: 8,
  },
});
