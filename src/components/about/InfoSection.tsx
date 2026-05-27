import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { sharedStyles } from './sharedStyles';

const { width: screenWidth } = Dimensions.get('window');

type InfoSectionProps = {
  title: React.ReactNode;
  description: string;
  backgroundColorName?: keyof typeof Colors.light;
  children?: React.ReactNode;
};

export function InfoSection({
  title,
  description,
  backgroundColorName = 'background',
  children,
}: InfoSectionProps) {
  return (
    <ThemedView
      style={styles.section}
      lightColor={Colors.light[backgroundColorName]}
      darkColor={Colors.dark[backgroundColorName]}>
      <View style={sharedStyles.sectionContainer}>
        <LinearGradient
          colors={['#ffffff', '#f8fafc', '#f1f5f9']}
          style={styles.gradientContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Decorative elements */}
          <View style={styles.decorativeCircle1} />
          <View style={styles.decorativeCircle2} />
          <View style={styles.decorativeLine} />
          
          {/* Content */}
          <View style={styles.contentWrapper}>
            <View style={styles.titleContainer}>
              <ThemedText type="title" style={[sharedStyles.mainTitle, styles.title]}>
                {title}
              </ThemedText>
            </View>
            <ThemedText 
              type="default" 
              style={[sharedStyles.descriptionText, styles.description]}
              lightColor={Colors.light.secondaryText}
              darkColor={Colors.dark.secondaryText}
            >
              {description}
            </ThemedText>
            {children}
          </View>
          
          {/* Decorative quote mark */}
          <View style={styles.quoteMark}>
            <ThemedText style={styles.quoteText}>"</ThemedText>
          </View>
        </LinearGradient>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: screenWidth > 800 ? 60 : 40,
    paddingHorizontal: screenWidth > 800 ? 40 : 20,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  gradientContainer: {
    width: '100%',
    borderRadius: screenWidth > 800 ? 28 : 20,
    padding: screenWidth > 800 ? 40 : 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
    position: 'relative',
    overflow: 'hidden',
    minHeight: screenWidth > 800 ? 300 : 200,
  },
  decorativeCircle1: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(59, 130, 246, 0.08)',
    zIndex: 0,
  },
  decorativeCircle2: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(147, 197, 253, 0.12)',
    zIndex: 0,
  },
  decorativeLine: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    zIndex: 0,
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: screenWidth > 800 ? 30 : 20,
    paddingHorizontal: screenWidth > 800 ? 20 : 10,
  },
  title: {
    fontSize: screenWidth > 800 ? 36 : 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.light.text,
    letterSpacing: 1,
    lineHeight: screenWidth > 800 ? 40 : 36,
  },
  description: {
    fontSize: screenWidth > 800 ? 18 : 16,
    lineHeight: screenWidth > 800 ? 30 : 26,
    maxWidth: screenWidth > 800 ? 700 : screenWidth - 60,
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.light.secondaryText,
    letterSpacing: 0.2,
  },
  quoteMark: {
    position: 'absolute',
    top: screenWidth > 800 ? 15 : 10,
    right: screenWidth > 800 ? 25 : 15,
    width: screenWidth > 800 ? 60 : 50,
    height: screenWidth > 800 ? 60 : 50,
    borderRadius: screenWidth > 800 ? 30 : 25,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  quoteText: {
    fontSize: screenWidth > 800 ? 36 : 28,
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
