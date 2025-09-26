import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface ReviewCardProps {
  img: string;
  name: string;
  body: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ img, name, body }) => {
  return (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Image 
          source={{ uri: img }} 
          style={styles.reviewAvatar}
          resizeMode="cover"
        />
        <View style={styles.reviewInfo}>
          <Text style={styles.reviewName}>{name}</Text>
        </View>
      </View>
      <Text style={styles.reviewBody}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewCard: {
    width: 256,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  reviewAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
  },
  reviewInfo: {
    flex: 1,
  },
  reviewName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  reviewBody: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});
