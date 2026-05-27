import { Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const sharedStyles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    maxWidth: screenWidth > 800 ? 900 : screenWidth - 40, // Responsive width
    alignItems: 'center',
  },
  mainTitle: {
    textAlign: 'center',
    marginBottom: screenWidth > 800 ? 30 : 20,
    fontSize: screenWidth > 800 ? 32 : 28,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  descriptionText: {
    textAlign: 'center',
    paddingHorizontal: screenWidth > 800 ? 20 : 10,
    lineHeight: screenWidth > 800 ? 30 : 26,
    fontSize: screenWidth > 800 ? 18 : 16,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
});
