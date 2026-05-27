import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { chairmanMessage } from '@/constants/aboutContent';
import { Colors } from '@/constants/Colors';
import { IMAGES } from '@/constants/team';
import { sharedStyles } from './sharedStyles';

const { width: screenWidth } = Dimensions.get('window');

export function ChairmanSection() {
  return (
    <ThemedView style={styles.section}>
      {/* Decorative background elements */}
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />
      <View style={styles.decorativeLine} />
      
      <View style={sharedStyles.sectionContainer}>
        <LinearGradient
          colors={['#f8fafc', '#e2e8f0', '#f1f5f9']}
          style={styles.gradientContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Header with icon */}
          <View style={styles.headerContainer}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Chairman's{' '}
              <ThemedText
                type="subtitle"
                style={styles.accentText}>
                Desk
              </ThemedText>
            </ThemedText>
          </View>

          {/* Main content */}
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <View style={styles.imageWrapper}>
                <Image source={IMAGES.mgoodRajendra} style={styles.chairmanImage} />
                <View style={styles.imageBorder} />
              </View>
              <View style={styles.imageShadow} />
            </View>
            
            <View style={styles.textContainer}>
              <ThemedText 
                type="default" 
                style={styles.chairmanText}
                lightColor={Colors.light.secondaryText}
                darkColor={Colors.dark.secondaryText}
              >
                {chairmanMessage.intro}
                <ThemedText style={styles.missionText} lightColor={Colors.light.tint} darkColor={Colors.dark.tint}>
                  "{chairmanMessage.mission}"
                </ThemedText>
                {chairmanMessage.conclusion}
              </ThemedText>
            </View>
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
    paddingVertical: screenWidth > 800 ? 80 : 50,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  decorativeCircle1: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    zIndex: -1,
  },
  decorativeCircle2: {
    position: 'absolute',
    bottom: -30,
    left: -30,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(147, 197, 253, 0.15)',
    zIndex: -1,
  },
  decorativeLine: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    zIndex: -1,
  },
  gradientContainer: {
    width: '100%',
    borderRadius: screenWidth > 800 ? 32 : 24,
    padding: screenWidth > 800 ? 40 : 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: screenWidth > 800 ? 40 : 30,
  },
  iconContainer: {
    width: screenWidth > 800 ? 60 : 50,
    height: screenWidth > 800 ? 60 : 50,
    borderRadius: screenWidth > 800 ? 30 : 25,
    backgroundColor: Colors.light.tint,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: screenWidth > 800 ? 20 : 15,
    shadowColor: Colors.light.tint,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  iconText: {
    fontSize: screenWidth > 800 ? 28 : 24,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 28 : 24,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  accentText: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexDirection: screenWidth > 800 ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: screenWidth > 800 ? 40 : 30,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
    zIndex: 2,
  },
  chairmanImage: {
    width: screenWidth > 800 ? 280 : 200,
    height: screenWidth > 800 ? 280 : 200,
    borderRadius: screenWidth > 800 ? 140 : 100,
    borderWidth: 6,
    borderColor: Colors.light.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  imageBorder: {
    position: 'absolute',
    top: -8,
    left: -8,
    right: -8,
    bottom: -8,
    borderRadius: screenWidth > 800 ? 148 : 108,
    borderWidth: 2,
    borderColor: Colors.light.tint,
    opacity: 0.3,
  },
  imageShadow: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: -20,
    bottom: -20,
    borderRadius: screenWidth > 800 ? 140 : 100,
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    zIndex: 1,
  },
  textContainer: {
    flex: 1,
    maxWidth: screenWidth > 800 ? 500 : screenWidth - 80,
  },
  chairmanText: {
    textAlign: 'left',
    paddingHorizontal: screenWidth > 800 ? 20 : 10,
    lineHeight: screenWidth > 800 ? 32 : 26,
    fontSize: screenWidth > 800 ? 18 : 16,
  },
  missionText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: screenWidth > 800 ? 20 : 18,
    lineHeight: screenWidth > 800 ? 28 : 24,
  },
  quoteMark: {
    position: 'absolute',
    top: screenWidth > 800 ? 20 : 15,
    right: screenWidth > 800 ? 30 : 20,
    width: screenWidth > 800 ? 80 : 60,
    height: screenWidth > 800 ? 80 : 60,
    borderRadius: screenWidth > 800 ? 40 : 30,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quoteText: {
    fontSize: screenWidth > 800 ? 48 : 36,
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
