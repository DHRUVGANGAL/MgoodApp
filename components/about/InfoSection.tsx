import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { sharedStyles } from './sharedStyles';

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
        <ThemedText type="title" style={sharedStyles.mainTitle}>
          {title}
        </ThemedText>
        <ThemedText type="secondary" style={sharedStyles.descriptionText}>
          {description}
        </ThemedText>
        {children}
      </View>
    </ThemedView>
  );
}

export function Globe() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={styles.globeContainer}>
      <ThemedView style={[styles.globePlaceholder, { borderColor: colors.border }]}>
        <ThemedText style={styles.globeText}>🌍</ThemedText>
        <ThemedText type="secondary" style={styles.globeSubtext}>
          India Healthcare
        </ThemedText>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  globeContainer: { alignItems: 'center', marginTop: 30 },
  globePlaceholder: {
    width: 200, height: 200, borderRadius: 100, alignItems: 'center',
    justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, borderWidth: 1,
  },
  globeText: { fontSize: 60 },
  globeSubtext: { fontSize: 14, marginTop: 10, fontWeight: '500' },
});
