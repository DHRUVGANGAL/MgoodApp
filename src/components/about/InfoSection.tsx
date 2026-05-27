import React from 'react';
import { Dimensions, StyleSheet, View, Platform } from 'react-native';

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
      darkColor={Colors.dark[backgroundColorName]}
    >
      <View style={sharedStyles.sectionContainer}>
        <ThemedView 
          style={styles.card}
          lightColor={Colors.light.card}
          darkColor={Colors.dark.card}
        >
          {/* Left brand accent line */}
          <View style={styles.accentLine} />
          
          <View style={styles.contentWrapper}>
            <View style={styles.titleContainer}>
              <ThemedText type="title" style={styles.title}>
                {title}
              </ThemedText>
            </View>
            <ThemedText 
              style={styles.description}
              lightColor={Colors.light.secondaryText}
              darkColor={Colors.dark.secondaryText}
            >
              {description}
            </ThemedText>
            {children}
          </View>
        </ThemedView>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: screenWidth > 800 ? 25 : 15,
    paddingHorizontal: screenWidth > 800 ? 40 : 20,
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '100%',
    borderRadius: 20,
    padding: screenWidth > 800 ? 30 : 24,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    position: 'relative',
    overflow: 'hidden',
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
      },
      android: {
        elevation: 2,
      },
      web: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
      }
    }),
  },
  accentLine: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: '#3b82f6', // Premium Brand Blue
    borderRadius: 5,
  },
  contentWrapper: {
    flex: 1,
    paddingLeft: 8,
  },
  titleContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: screenWidth > 800 ? 26 : 21,
    fontWeight: '800',
    color: Colors.light.text,
    letterSpacing: 0.5,
    lineHeight: 28,
  },
  description: {
    fontSize: screenWidth > 800 ? 15.5 : 14,
    lineHeight: 22,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
});
