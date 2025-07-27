import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { chairmanMessage } from '@/constants/aboutContent';
import { IMAGES } from '@/constants/team';
import { sharedStyles } from './sharedStyles';
import { Colors } from '@/constants/Colors';

export function ChairmanSection() {
  return (
    <ThemedView
      style={styles.section}
      lightColor={Colors.light.backgroundOffset2}
      darkColor={Colors.dark.backgroundOffset2}>
      <View style={sharedStyles.sectionContainer}>
        <Image source={IMAGES.mgoodRajendra} style={styles.chairmanImage} />
        <View style={styles.chairmanTextContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Chairman's{' '}
            <ThemedText
              type="subtitle"
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}>
              Desk
            </ThemedText>
          </ThemedText>
          <ThemedText type="secondary" style={styles.chairmanText}>
            {chairmanMessage.intro}
            <ThemedText style={styles.missionText} lightColor={Colors.light.tint} darkColor={Colors.dark.tint}>
              "{chairmanMessage.mission}"
            </ThemedText>
            {chairmanMessage.conclusion}
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  chairmanImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#ffffff', // Keep white border for contrast on both themes
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chairmanTextContainer: {
    alignItems: 'center',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 15,
  },
  chairmanText: {
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 24,
  },
  missionText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
