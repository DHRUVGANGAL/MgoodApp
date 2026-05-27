import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { mentors, Mentor } from '@/constants/aboutContent';
import { IMAGES } from '@/constants/team';
import { sharedStyles } from './sharedStyles';

const { width: screenWidth } = Dimensions.get('window');

function MentorCard({ mentor }: { mentor: Mentor }) {
  const [imageError, setImageError] = useState(false);
  
  // Resolve the image source dynamically using the key from IMAGES
  const imageSource = IMAGES[mentor.imageKey as keyof typeof IMAGES] || IMAGES.profile;
  
  // Check if it's using the default profile placeholder
  const isPlaceholder = imageSource === IMAGES.profile || imageError;

  return (
    <ThemedView 
      style={styles.card}
      lightColor={Colors.light.card}
      darkColor={Colors.dark.card}
    >
      <View style={styles.cardContent}>
        {/* Left Side: Mentor Image */}
        <View style={styles.imageContainer}>
          <Image 
            source={imageSource} 
            style={styles.mentorImage}
            onError={() => setImageError(true)}
          />
          {isPlaceholder && (
            <View style={styles.initialsOverlay}>
              <ThemedText style={styles.initialsText}>
                {mentor.name.split(' ').slice(1).map(n => n[0]).join('') || 'M'}
              </ThemedText>
            </View>
          )}
          <View style={styles.imageBorder} />
        </View>

        {/* Right Side: Mentor Info */}
        <View style={styles.infoContainer}>
          <ThemedText type="defaultSemiBold" style={styles.mentorName}>
            {mentor.name}
          </ThemedText>
          <ThemedText 
            style={styles.mentorRole}
            lightColor={Colors.light.secondaryText}
            darkColor={Colors.dark.secondaryText}
          >
            {mentor.role}
          </ThemedText>

          {/* Styled Badge */}
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <ThemedText style={styles.badgeText}>
                {mentor.badge}
              </ThemedText>
            </View>
          </View>
        </View>
      </View>

      {/* Description below the top row */}
      <View style={styles.descriptionContainer}>
        <ThemedText 
          style={styles.mentorDescription}
          lightColor={Colors.light.secondaryText}
          darkColor={Colors.dark.secondaryText}
        >
          {mentor.description}
        </ThemedText>
      </View>
    </ThemedView>
  );
}

export function MentorsSection() {
  return (
    <ThemedView style={styles.section}>
      <View style={sharedStyles.sectionContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <ThemedText type="title" style={styles.titlePrefix}>
            OUR{' '}
            <ThemedText type="title" style={styles.titleHighlight}>
              MENTORS
            </ThemedText>
          </ThemedText>
          <ThemedText 
            style={styles.subtitle}
            lightColor={Colors.light.secondaryText}
            darkColor={Colors.dark.secondaryText}
          >
            We are humbled to have visionary leaders mentoring us with over{' '}
            <ThemedText style={styles.boldGreen}>100+ years of combined experience in public service</ThemedText>. 
            Their leadership, administrative excellence, and guidance continue to inspire MGood in our mission to make healthcare accessible to millions.
          </ThemedText>
        </View>

        {/* Vertical Stack of Cards */}
        <View style={styles.cardsList}>
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: screenWidth > 800 ? 50 : 35,
    paddingHorizontal: screenWidth > 800 ? 40 : 20,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  titlePrefix: {
    fontSize: screenWidth > 800 ? 32 : 28,
    fontWeight: 'bold',
    color: Colors.light.text,
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  titleHighlight: {
    color: '#10b981', // Premium green color matching the screenshot
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 16 : 14,
    lineHeight: 22,
    maxWidth: 750,
    fontWeight: '400',
  },
  boldGreen: {
    color: '#10b981',
    fontWeight: 'bold',
  },
  cardsList: {
    width: '100%',
    gap: 20,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    ...Platform.select({
      ios: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
      },
      android: {
        elevation: 3,
      },
      web: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
      }
    }),
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 85,
    height: 85,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f1f5f9',
  },
  mentorImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  initialsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  initialsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10b981',
  },
  imageBorder: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1.5,
    borderColor: 'rgba(16, 185, 129, 0.2)',
    borderRadius: 16,
    pointerEvents: 'none',
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  mentorName: {
    fontSize: screenWidth > 800 ? 20 : 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  mentorRole: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
  },
  badge: {
    backgroundColor: '#e6f7f0', // Very soft light green background
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 11,
    color: '#059669', // Deep green text for high readability and contrast
    fontWeight: '700',
  },
  descriptionContainer: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  mentorDescription: {
    fontSize: screenWidth > 800 ? 15 : 13.5,
    lineHeight: 20,
    fontWeight: '400',
  },
});
