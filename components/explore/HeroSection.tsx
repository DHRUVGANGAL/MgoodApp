import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Star, CheckCircle } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface HeroSectionProps {
  stats: Array<{
    number: string;
    label: string;
    color: string;
  }>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ stats }) => {
  return (
    <View style={styles.heroSection}>
      <View style={styles.heroContent}>
        {/* Text Content */}
        <View style={styles.heroText}>
          <Text style={styles.heroTitle}>
            Transform Your{'\n'}
            <Text style={styles.heroTitleHighlight}>Employee Wellness</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            MGood revolutionizes corporate healthcare with comprehensive wellness programs, 
            preventive care, and seamless health management solutions designed specifically for modern businesses.
          </Text>
        </View>
        
        {/* Stats */}
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={[styles.statNumber, { color: stat.color }]}>{stat.number}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Image/Visual Content */}
      <View style={styles.heroVisual}>
        <LinearGradient
          colors={['#3b82f6', '#8b5cf6', '#14b8a6']}
          style={styles.gradientCard}
        >
          <View style={styles.dashboardCard}>
            <View style={styles.dashboardHeader}>
              <View style={styles.iconContainer}>
                <Heart size={24} color="#2563eb" />
              </View>
              <View>
                <Text style={styles.dashboardTitle}>Health Dashboard</Text>
                <Text style={styles.dashboardSubtitle}>Real-time wellness insights</Text>
              </View>
            </View>
            
            <View style={styles.progressSection}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressLabel}>Employee Wellness Score</Text>
                <Text style={styles.progressValue}>92%</Text>
              </View>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '92%' }]} />
              </View>
            </View>

            <View style={styles.statsGrid}>
              <View style={styles.statBox}>
                <Text style={styles.statBoxNumber}>24/7</Text>
                <Text style={styles.statBoxLabel}>Health Support</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statBoxNumber}>376+</Text>
                <Text style={styles.statBoxLabel}>Health Service Providers</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        
        <View style={styles.floatingIcon1}>
          <Star size={32} color="white" />
        </View>
        <View style={styles.floatingIcon2}>
          <CheckCircle size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    minHeight: height,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
  },
  heroText: {
    marginBottom: 40,
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#111827',
    lineHeight: 48,
    marginBottom: 20,
  },
  heroTitleHighlight: {
    color: '#2563eb',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#6b7280',
    lineHeight: 28,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  heroVisual: {
    marginTop: 40,
    alignItems: 'center',
  },
  gradientCard: {
    borderRadius: 24,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  dashboardCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 32,
    width: width - 80,
  },
  dashboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#dbeafe',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  dashboardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  dashboardSubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  progressSection: {
    marginBottom: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  progressValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#16a34a',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#16a34a',
    borderRadius: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#eff6ff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  statBoxNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 4,
  },
  statBoxLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  floatingIcon1: {
    position: 'absolute',
    top: -16,
    right: -16,
    width: 96,
    height: 96,
    backgroundColor: '#fbbf24',
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  floatingIcon2: {
    position: 'absolute',
    bottom: -16,
    left: -16,
    width: 64,
    height: 64,
    backgroundColor: '#10b981',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
});
