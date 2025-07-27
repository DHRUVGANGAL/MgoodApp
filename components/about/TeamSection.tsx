import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { testimonials, Testimonial } from '@/constants/team';
import { sharedStyles } from './sharedStyles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = screenWidth * 0.8;
const CARD_MARGIN = 10;
const SNAP_INTERVAL = CARD_WIDTH + CARD_MARGIN * 2;

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={[styles.testimonialCard, { borderColor: colors.border }]}>
      <Image source={testimonial.src} style={[styles.testimonialImage, { borderColor: colors.border }]} />
      <ThemedText type="secondary" style={styles.testimonialQuote}>
        "{testimonial.quote}"
      </ThemedText>
      <ThemedText type="defaultSemiBold" style={styles.testimonialName}>
        {testimonial.name}
      </ThemedText>
      <ThemedText type="secondary" style={styles.testimonialDesignation}>
        {testimonial.designation}
      </ThemedText>
    </ThemedView>
  );
}

export function TeamSection() {
  return (
    <ThemedView style={styles.section}>
      <View style={sharedStyles.sectionContainer}>
        <ThemedText type="title" style={sharedStyles.mainTitle}>
          Our Team
        </ThemedText>
        <ThemedText type="secondary" style={styles.teamSubtitle}>
          Meet our experts who are driving the MGood platform and brand.
        </ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={SNAP_INTERVAL}
          snapToAlignment="center"
          decelerationRate="fast"
          style={styles.testimonialContainer}
          contentContainerStyle={styles.testimonialContentContainer}>
          {testimonials.map(item => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </ScrollView>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  teamSubtitle: {
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  testimonialContainer: {
    marginTop: 20,
  },
  testimonialContentContainer: {
    // Add padding to the sides to center the first and last cards
    paddingHorizontal: (screenWidth - CARD_WIDTH) / 2 - CARD_MARGIN,
  },
  testimonialCard: {
    width: CARD_WIDTH,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: CARD_MARGIN,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    borderWidth: 1,
  },
  testimonialImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
    borderWidth: 2,
  },
  testimonialQuote: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  testimonialName: {
    marginBottom: 5,
    textAlign: 'center',
  },
  testimonialDesignation: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
});
