import React from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ChairmanSection } from '@/components/about/ChairmanSection';
import { Globe, InfoSection } from '@/components/about/InfoSection';
import { TeamSection } from '@/components/about/TeamSection';
import {
  aboutIndiaText,
  aboutMGoodText,
} from '@/constants/aboutContent';
import { Colors } from '@/constants/Colors';

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <>
              Healthcare in{' '}
              <ThemedText type="title" lightColor={Colors.light.tint} darkColor={Colors.dark.tint}>
                INDIA
              </ThemedText>
            </>
          }
          description={aboutIndiaText}
          backgroundColorName="backgroundOffset">
          <Globe />
        </InfoSection>
        <ChairmanSection />
        <TeamSection />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});