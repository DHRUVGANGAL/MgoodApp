import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <View style={styles.featureCard}>
      <View style={styles.featureIcon}>
        {icon}
      </View>
      <Text style={styles.featureTitle}>
        {title}
      </Text>
      <Text style={styles.featureDescription}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  featureCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 32,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  featureIcon: {
    marginBottom: 24,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  featureDescription: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
});
