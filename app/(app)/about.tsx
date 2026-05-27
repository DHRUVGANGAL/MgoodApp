import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
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
import { useThemeColor } from '@/hooks/useThemeColor';

const { width: screenWidth } = Dimensions.get('window');

export default function AboutScreen() {
  const router = useRouter();
  const iconColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <ThemedView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {/* Professional Header with Back Button */}
        <ThemedView style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton} accessibilityLabel="Go back">
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
              <ThemedText type="title" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
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
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
    backgroundColor: Colors.light.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  backButton: {
    padding: 8,
    zIndex: 10,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 26 : 22,
    fontWeight: 'bold',
    color: Colors.light.text,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 14 : 12,
    color: Colors.light.secondaryText,
    marginTop: 2,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  footerSpacing: {
    height: 10,
  },
});
