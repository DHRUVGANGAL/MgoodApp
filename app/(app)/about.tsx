import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InfoSection, MentorsSection, TeamSection, ThemedText, ThemedView } from '@/components';
import {
  aboutIndiaText,
  aboutMGoodText,
} from '@/constants/aboutContent';
import { useThemeColor } from '@/hooks/useThemeColor';

const { width: screenWidth } = Dimensions.get('window');

export default function AboutScreen() {
  const router = useRouter();
  const iconColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'backgroundOffset'); // Slightly offset background for premium depth
  const headerBg = useThemeColor({}, 'background');
  const borderBg = useThemeColor({}, 'border');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'} />
      <ThemedView style={[styles.container, { backgroundColor }]}>

        {/* Premium Professional Header */}
        <View style={[styles.header, { backgroundColor: headerBg, borderBottomColor: borderBg }]}>
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton} 
            accessibilityLabel="Go back"
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={24} color={iconColor} />
          </TouchableOpacity>
          
          <View style={styles.headerTitleContainer}>
            <ThemedText style={styles.headerTitle}>
              About MGood
            </ThemedText>
            <ThemedText style={styles.headerSubtitle}>
              Healthcare Innovation & Excellence
            </ThemedText>
          </View>
          
          <View style={styles.placeholder} />
        </View>

        {/* Content Body */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          {/* Section 1: About MGOOD */}
          <InfoSection
            title={
              <ThemedText style={styles.infoTitle}>
                About{' '}
                <ThemedText style={[styles.infoTitle, styles.blueHighlight]}>
                  MGOOD
                </ThemedText>
              </ThemedText>
            }
            description={aboutMGoodText}
          />
          
          {/* Section 2: Healthcare in INDIA */}
          <InfoSection
            title={
              <ThemedText style={styles.infoTitle}>
                Healthcare in{' '}
                <ThemedText style={[styles.infoTitle, styles.blueHighlight]}>
                  INDIA
                </ThemedText>
              </ThemedText>
            }
            description={aboutIndiaText}
          />
          
          {/* Section 3: OUR MENTORS (Replaces Chairman's Desk) */}
          <MentorsSection />
          
          {/* Section 4: OUR TEAM */}
          <TeamSection />

          {/* Footer spacing */}
          <View style={styles.footerSpacing} />
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1.5,
    ...Platform.select({
      ios: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 6,
      },
      android: {
        elevation: 2,
      },
      web: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 6,
      }
    }),
  },
  backButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(241, 245, 249, 0.8)', // Glassmorphic background for back button
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 24 : 20,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 13 : 11,
    color: '#64748b',
    marginTop: 1.5,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 15,
    paddingBottom: 80,
  },
  infoTitle: {
    fontSize: screenWidth > 800 ? 26 : 21,
    fontWeight: '800',
  },
  blueHighlight: {
    color: '#3b82f6',
  },
  footerSpacing: {
    height: 20,
  },
});
