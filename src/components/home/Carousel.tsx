import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
const MARGIN = 16;

type CarouselProps = {
  images?: number[];
  height?: number;
  indicatorColor?: string;
  indicatorInactiveColor?: string;
  autoPlay?: boolean;
  intervalMs?: number;
};

const defaultImages = [
  require('../../../assets/images/1.png'),
  require('../../../assets/images/2.png'),
  require('../../../assets/images/3.png'),
];

export default function Carousel({
  images = defaultImages,
  height = 200,
  indicatorColor = '#111827',
  indicatorInactiveColor = '#D1D5DB',
  autoPlay = true,
  intervalMs = 3000,
}: CarouselProps) {
  const scrollRef = useRef<ScrollView | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    if (index !== activeIndex) setActiveIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const id = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
      setActiveIndex(nextIndex);
    }, Math.max(1500, intervalMs));

    return () => clearInterval(id);
  }, [autoPlay, intervalMs, activeIndex, images.length]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {images.map((imgSrc, idx) => (
          <View key={idx} style={styles.pageWrapper}>
            <View style={[styles.imageContainer, { height, width: width - MARGIN * 2 }]}> 
              <Image
                source={imgSrc}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.indicatorsWrapper}>
        <View style={styles.indicatorsRow}>
          {images.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.dot,
                { backgroundColor: idx === activeIndex ? indicatorColor : indicatorInactiveColor },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  pageWrapper: {
    width,
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: MARGIN,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#f3f4f6',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  indicatorsWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  indicatorsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
