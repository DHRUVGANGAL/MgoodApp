import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ReviewCard } from './ReviewCard';

interface Review {
  name: string;
  body: string;
  img: string;
  id: number;
}

interface MarqueeSectionProps {
  reviews: Review[];
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({ reviews }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality for the marquee
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        const nextIndex = (currentIndex + 1) % reviews.length;
        setCurrentIndex(nextIndex);
        
        // Calculate the scroll position (each card is 272px wide including margin)
        const scrollToX = nextIndex * 272;
        
        scrollViewRef.current.scrollTo({
          x: scrollToX,
          animated: true,
        });
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, reviews.length]);

  // Handle scroll events to update current index
  const handleScroll = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / 272);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.marqueeSection}>
      <Text style={styles.sectionTitle}>Our Onboarded Corporates</Text>
      <ScrollView 
        ref={scrollViewRef}
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.marqueeContainer}
        pagingEnabled={false}
        decelerationRate="fast"
        snapToInterval={272} // Width of each card + margin
        snapToAlignment="start"
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  marqueeSection: {
    paddingVertical: 48,
    backgroundColor: '#f9fafb',
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2563eb',
    textAlign: 'center',
    marginBottom: 32,
  },
  marqueeContainer: {
    paddingHorizontal: 20,
  },
});
