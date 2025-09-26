import React from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChairmanSection } from '@/components/about/ChairmanSection';
import { InfoSection } from '@/components/about/InfoSection';
import { TeamSection } from '@/components/about/TeamSection';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {
  aboutIndiaText,
  aboutMGoodText,
} from '@/constants/aboutContent';
import { Colors } from '@/constants/Colors';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        
        {/* Professional Header */}
        <ThemedView style={styles.header}>
          <ThemedText style={styles.headerTitle}>
            About MGood
          </ThemedText>
          <ThemedText style={styles.headerSubtitle}>
            Healthcare Innovation & Excellence
          </ThemedText>
        </ThemedView>

        {/* Content */}
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          <InfoSection
            title={
              <>
                About{' '}
                <ThemedText type="title" lightColor={Colors.light.tint} darkColor={Colors.dark.tint}>
                  MGOOD
                </ThemedText>
              </>
            }
            description={aboutMGoodText}
          />
          <InfoSection
            title={
              <ThemedText type="title" style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
                Healthcare in{' '}
                <ThemedText type="title" lightColor={Colors.light.tint} darkColor={Colors.dark.tint}>
                  INDIA
                </ThemedText>
              </ThemedText>
            }
            description={aboutIndiaText}
            backgroundColorName="backgroundOffset"
          />
          <ChairmanSection />
          <TeamSection />
          
          {/* Footer spacing */}
          <ThemedView style={styles.footerSpacing} />
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
    backgroundColor: Colors.light.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 32 : 28,
    fontWeight: 'bold',
    color: Colors.light.text,
    letterSpacing: 1,
    paddingTop: 10,
    
  },
  headerSubtitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 18 : 16,
    color: Colors.light.secondaryText,
    marginTop: 4,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 60, // Reduced padding for tab bar
  },
  footerSpacing: {
    height: 10,
  },
});