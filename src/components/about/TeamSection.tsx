import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { Testimonial, testimonials } from '@/constants/team';
import { sharedStyles } from './sharedStyles';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = screenWidth > 800 ? 400 : screenWidth * 0.9;

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const colors = Colors.light;
  const [imageError, setImageError] = useState(false);

  return (
    <ThemedView style={styles.testimonialCard}>
      {/* Image Section */}
      <View style={styles.imageSection}>
        <View style={styles.imageContainer}>
          <Image 
            source={imageError ? require('../../../assets/images/profile.jpg') : testimonial.src} 
            style={styles.testimonialImage}
            onError={(error) => {
              console.log('Image loading error for:', testimonial.name, error);
              setImageError(true);
            }}
            onLoad={() => {
              console.log('Image loaded successfully for:', testimonial.name);
            }}
          />
        </View>
      </View>
      
      {/* Content Section */}
      <View style={styles.contentSection}>
        <ThemedText type="defaultSemiBold" style={styles.testimonialName}>
          {testimonial.name}
        </ThemedText>
        <ThemedText 
          type="default" 
          style={styles.testimonialDesignation}
          lightColor={Colors.light.secondaryText}
          darkColor={Colors.dark.secondaryText}
        >
          {testimonial.designation}
        </ThemedText>
        <ThemedText 
          type="default" 
          style={styles.testimonialQuote}
          lightColor={Colors.light.secondaryText}
          darkColor={Colors.dark.secondaryText}
        >
          "{testimonial.quote}"
        </ThemedText>
      </View>
    </ThemedView>
  );
}

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <ThemedView style={styles.section}>
      <View style={sharedStyles.sectionContainer}>
        <ThemedText type="title" style={[sharedStyles.mainTitle, styles.teamTitle]}>
          Our Team
        </ThemedText>
        <ThemedText 
          type="default" 
          style={styles.teamSubtitle}
          lightColor={Colors.light.secondaryText}
          darkColor={Colors.dark.secondaryText}
        >
          Meet our experts who are driving the MGood platform and brand.
        </ThemedText>
        
        {/* Main Card Container */}
        <View style={styles.cardContainer}>
          <TestimonialCard testimonial={currentTestimonial} />
          
          {/* Navigation Arrows */}
          <View style={styles.navigationContainer}>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={goToPrevious}
              activeOpacity={0.7}
            >
              <IconSymbol 
                name="chevron.left" 
                size={24} 
                color={Colors.light.text} 
              />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={goToNext}
              activeOpacity={0.7}
            >
              <IconSymbol 
                name="chevron.right" 
                size={24} 
                color={Colors.light.text} 
              />
            </TouchableOpacity>
          </View>
          
          {/* Dots Indicator */}
          <View style={styles.dotsContainer}>
            {testimonials.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dot,
                  index === currentIndex && styles.activeDot
                ]}
                onPress={() => setCurrentIndex(index)}
              />
            ))}
          </View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: screenWidth > 800 ? 60 : 30,
    alignItems: 'center',
    minHeight: screenWidth > 800 ? 500 : 350,
  },
  teamTitle: {
    fontSize: screenWidth > 800 ? 36 : 32,
    marginBottom: screenWidth > 800 ? 20 : 15,
    fontWeight: 'bold',
  },
  teamSubtitle: {
    textAlign: 'center',
    marginBottom: screenWidth > 800 ? 50 : 40,
    paddingHorizontal: screenWidth > 800 ? 50 : 25,
    fontSize: screenWidth > 800 ? 20 : 18,
    lineHeight: screenWidth > 800 ? 28 : 26,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: CARD_WIDTH,
    marginTop: screenWidth > 800 ? 30 : 20,
    marginBottom: screenWidth > 800 ? 20 : 15,
  },
  testimonialCard: {
    width: '100%',
    backgroundColor: Colors.light.background,
    borderRadius: screenWidth > 800 ? 24 : 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: Colors.light.border,
    overflow: 'hidden',
  },
  imageSection: {
    width: '100%',
    height: screenWidth > 800 ? 300 : 250,
    backgroundColor: Colors.light.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: screenWidth > 800 ? 200 : 160,
    height: screenWidth > 800 ? 200 : 160,
    borderRadius: screenWidth > 800 ? 20 : 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    backgroundColor: Colors.light.background,
  },
  testimonialImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  contentSection: {
    padding: screenWidth > 800 ? 35 : 25,
    alignItems: 'center',
  },
  testimonialName: {
    fontSize: screenWidth > 800 ? 24 : 20,
    fontWeight: 'bold',
    color: Colors.light.text,
    textAlign: 'center',
    marginBottom: screenWidth > 800 ? 8 : 6,
  },
  testimonialDesignation: {
    fontSize: screenWidth > 800 ? 16 : 14,
    textAlign: 'center',
    fontWeight: '500',
    color: Colors.light.tint,
    marginBottom: screenWidth > 800 ? 20 : 15,
  },
  testimonialQuote: {
    textAlign: 'center',
    lineHeight: screenWidth > 800 ? 26 : 24,
    fontSize: screenWidth > 800 ? 17 : 15,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: screenWidth > 800 ? 30 : 25,
    paddingHorizontal: screenWidth > 800 ? 40 : 20,
  },
  navButton: {
    width: screenWidth > 800 ? 50 : 40,
    height: screenWidth > 800 ? 50 : 40,
    borderRadius: screenWidth > 800 ? 25 : 20,
    backgroundColor: Colors.light.backgroundOffset,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screenWidth > 800 ? 25 : 20,
    gap: screenWidth > 800 ? 12 : 8,
  },
  dot: {
    width: screenWidth > 800 ? 12 : 10,
    height: screenWidth > 800 ? 12 : 10,
    borderRadius: screenWidth > 800 ? 6 : 5,
    backgroundColor: Colors.light.border,
  },
  activeDot: {
    backgroundColor: Colors.light.tint,
  },
});

