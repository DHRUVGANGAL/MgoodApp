import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const sharedStyles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    maxWidth: screenWidth > 800 ? 800 : screenWidth - 40, // Responsive width
    alignItems: 'center',
  },
  mainTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  descriptionText: {
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 10,
    lineHeight: 24,
  },
});
